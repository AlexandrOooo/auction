using Auction.Common.Models;

namespace Auction.BL.Services.Abstract;

public interface IAuctionService
{
    public Task<(bool hasNext, List<AuctionModel> data)> GetAsync(int limit, int skip, CancellationToken cancellationToken = default);
    public Task<AuctionDetailModel> GetOneAsync(Guid id, CancellationToken cancellationToken = default);
}