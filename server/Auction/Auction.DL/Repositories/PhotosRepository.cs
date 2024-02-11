using Auction.Common.Enums;
using Auction.DL.Entities;
using Auction.DL.Repositories.Abstract;
using Microsoft.EntityFrameworkCore;

namespace Auction.DL.Repositories;

public class PhotosRepository : IPhotosRepository, IDisposable
{
    private readonly ApplicationContext _context;

    public PhotosRepository(ApplicationContext context)
    {
        _context = context;
    }

    public async Task<List<PhotoEntity>> GetAsync(Guid auctionId, CancellationToken cancellationToken = default)
    {
        return await _context.Photos.Where(x => x.AuctionId == auctionId).ToListAsync(cancellationToken);
    }
    
    public async Task<PhotoEntity> CreateAsync(Guid auctionId, byte[] photo, CancellationToken cancellationToken = default)
    {
        var result = _context.Photos.Add(new PhotoEntity { AuctionId = auctionId, Photo = photo});
        await _context.SaveChangesAsync(cancellationToken);

        return result.Entity;
    }

    public void Dispose()
    {
        _context.Dispose();
    }
}