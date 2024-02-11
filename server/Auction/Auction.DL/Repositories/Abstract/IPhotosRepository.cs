using Auction.DL.Entities;

namespace Auction.DL.Repositories.Abstract;

public interface IPhotosRepository
{
    public Task<List<PhotoEntity>> GetAsync(Guid auctionId, CancellationToken cancellationToken = default);
    public Task<PhotoEntity> CreateAsync(Guid auctionId, byte[] photo, CancellationToken cancellationToken = default);
}