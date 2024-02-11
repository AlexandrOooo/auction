using Auction.Common.Enums;
using Auction.DL.Entities;
using Auction.DL.Repositories.Abstract;
using Microsoft.EntityFrameworkCore;

namespace Auction.DL.Repositories;

public class BetsRepository : IBetsRepository, IDisposable
{
    private readonly ApplicationContext _context;

    public BetsRepository(ApplicationContext context)
    {
        _context = context;
    }

    public async Task<(bool hasNext, List<UserAuctionEntity> data)> GetAsync(int limit, int skip = 0, Guid? auctionId = null,
        CancellationToken cancellationToken = default)
    {
        var query = _context.UsersAuctions
                            .Include(x => x.User)
                            .Include(x => x.Auction)
                            .Where(x => x.Relation == UserAuctionRelation.Buyer);

        if (auctionId.HasValue)
        {
            query = query.Where(x => x.AuctionId == auctionId);
        }
        var result = await query.Skip(skip).Take(limit + 1).ToListAsync(cancellationToken);

        return (result.Count > limit, result.Skip(skip).Take(limit).ToList());
    }

    public async Task<UserAuctionEntity> GetOneAsync(Guid id, CancellationToken cancellationToken = default)
        => await _context.UsersAuctions
                         .Include(x => x.User)
                         .Include(x => x.Auction)
                         .FirstOrDefaultAsync(x => x.Id == id, cancellationToken) ?? new UserAuctionEntity();

    public async Task<UserAuctionEntity> GetLastOneAsync(Guid auctionId, Guid? userId = null, CancellationToken cancellationToken = default)
        => await _context.UsersAuctions
                         .Include(x => x.User)
                         .Include(x => x.Auction)
                         .OrderBy(x => x.CreatedAt)
                         .LastOrDefaultAsync(x => x.AuctionId == auctionId && (userId == null || x.UserId == userId),
                             cancellationToken);

    public async Task<UserAuctionEntity> CreateAsync(UserAuctionEntity entity, CancellationToken cancellationToken = default)
    {
        var result = _context.UsersAuctions.Add(entity);
        await _context.SaveChangesAsync(cancellationToken);

        return result.Entity;
    }

    public void Dispose()
    {
        _context.Dispose();
    }
}