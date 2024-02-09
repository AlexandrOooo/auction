using Auction.DL.Entities;

namespace Auction.DL.Repositories.Abstract;

public interface IAuctionsRepository
{
    public Task<(bool hasNext, List<AuctionEntity> data)> GetAsync(int limit, int skip = 0, CancellationToken cancellationToken = default);
    public Task<AuctionEntity> GetOneAsync(Guid id, CancellationToken cancellationToken = default);
}