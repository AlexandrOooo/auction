using Auction.Common.Contracts.Requests;
using Auction.Common.Models;

namespace Auction.BL.Services.Abstract;

public interface IAuctionService
{
    public Task<(bool hasNext, List<AuctionModel> data)> GetAsync(GetManyAuctionsRequest request, CancellationToken cancellationToken = default);
    public Task<AuctionDetailModel> GetOneAsync(Guid id, CancellationToken cancellationToken = default);
    public Task<AuctionDetailModel> CreateAsync(AuctionDetailModel model, CancellationToken cancellationToken = default);
    public Task<AuctionDetailModel> UpdateAsync(AuctionDetailModel model, CancellationToken cancellationToken = default);
    public Task<AuctionDetailModel> ArchiveAsync(Guid id, CancellationToken cancellationToken = default);
}