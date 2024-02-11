using Auction.Common.Contracts.Requests;
using Auction.Common.Models;

namespace Auction.BL.Services.Abstract;

public interface IBetService
{
    public Task<(bool hasNext, List<BetModel> data)> GetAsync(GetManyBetsRequest request, CancellationToken cancellationToken = default);
    public Task<BetModel> GetOneAsync(Guid id, CancellationToken cancellationToken = default);
    public Task<BetModel> CreateAsync(CreateBetCommand command, CancellationToken cancellationToken = default);
}