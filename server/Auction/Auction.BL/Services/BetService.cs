using Auction.BL.Services.Abstract;
using Auction.Common.Contracts.Requests;
using Auction.Common.Enums;
using Auction.Common.Models;
using Auction.DL.Entities;
using Auction.DL.Repositories.Abstract;
using AutoMapper;

namespace Auction.BL.Services;

public class BetService : IBetService
{
    private readonly IBetsRepository _betsRepository;
    private readonly IMapper _mapper;

    public BetService(IMapper mapper, IBetsRepository betsRepository)
    {
        _mapper = mapper;
        _betsRepository = betsRepository;
    }

    public async Task<(bool hasNext, List<BetModel> data)> GetAsync(GetManyBetsRequest request, CancellationToken cancellationToken = default)
    {
        var entities = await _betsRepository.GetAsync(request.Limit, request.Skip, request.AuctionId, cancellationToken);

        return (entities.hasNext, _mapper.Map<List<UserAuctionEntity>, List<BetModel>>(entities.data));
    }

    public async Task<BetModel> GetOneAsync(Guid id, CancellationToken cancellationToken = default)
    {
        var entity = await _betsRepository.GetOneAsync(id, cancellationToken);
        
        return _mapper.Map<UserAuctionEntity, BetModel>(entity);
    }

    public async Task<BetModel> CreateAsync(CreateBetCommand command, CancellationToken cancellationToken = default)
    {
        var entity = await _betsRepository.CreateAsync(new UserAuctionEntity
        {
            AuctionId = command.AuctionId,
            UserId = command.UserId,
            BetPrice = command.BetPrice,
            Relation = UserAuctionRelation.Buyer
        }, cancellationToken);

        return await GetOneAsync(entity.Id, cancellationToken);
    }
}