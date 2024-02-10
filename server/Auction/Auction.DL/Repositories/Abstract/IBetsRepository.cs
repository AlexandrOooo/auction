using Auction.DL.Entities;

namespace Auction.DL.Repositories.Abstract;

public interface IBetsRepository
{
    public Task<(bool hasNext, List<UserAuctionEntity> data)> GetAsync(int limit, int skip = 0, Guid? auctionId = null, CancellationToken cancellationToken = default);
    public Task<UserAuctionEntity> GetOneAsync(Guid id, CancellationToken cancellationToken = default);
    public Task<UserAuctionEntity> GetLastOneAsync(Guid auctionId, Guid? userId = null, CancellationToken cancellationToken = default);
    public Task<UserAuctionEntity> CreateAsync(UserAuctionEntity entity, CancellationToken cancellationToken = default);
}