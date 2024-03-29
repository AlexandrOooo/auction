using Auction.DL.Entities;
using Auction.DL.Repositories.Abstract;
using Microsoft.EntityFrameworkCore;

namespace Auction.DL.Repositories;

public class AuctionsRepository : IAuctionsRepository, IDisposable
{
    private readonly ApplicationContext _context;

    public AuctionsRepository(ApplicationContext context)
    {
        _context = context;
    }

    public async Task<(bool hasNext, List<AuctionEntity> data)> GetAsync(int limit, int skip = 0, bool isArchived = false,
        CancellationToken cancellationToken = default)
    {
        var result = await _context.Auctions.Where(x => x.IsArchived == isArchived)
                                   .Skip(skip).Take(limit + 1).ToListAsync(cancellationToken);

        return (result.Count > limit, result.Skip(skip).Take(limit).ToList());
    }

    public async Task<AuctionEntity> GetOneAsync(Guid id, CancellationToken cancellationToken = default)
        => await _context.Auctions.FirstOrDefaultAsync(x => x.Id == id, cancellationToken);

    public async Task<AuctionEntity> CreateAsync(AuctionEntity entity, CancellationToken cancellationToken = default)
    {
        var result = _context.Auctions.Add(entity);
        await _context.SaveChangesAsync(cancellationToken);

        return result.Entity;
    }

    public async Task<AuctionEntity> UpdateAsync(AuctionEntity entity, CancellationToken cancellationToken = default)
    {
        var result = _context.Auctions.Update(entity);
        await _context.SaveChangesAsync(cancellationToken);

        return result.Entity;
    }

    public void Dispose()
    {
        _context.Dispose();
    }
}