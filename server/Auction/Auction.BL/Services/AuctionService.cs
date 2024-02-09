using Auction.BL.Services.Abstract;
using Auction.Common.Models;
using Auction.DL.Entities;
using Auction.DL.Repositories.Abstract;
using AutoMapper;

namespace Auction.BL.Services;

public class AuctionService : IAuctionService
{
    private readonly IAuctionsRepository _auctionRepository;
    private readonly IMapper _mapper;

    public AuctionService(IAuctionsRepository auctionRepository, IMapper mapper)
    {
        _auctionRepository = auctionRepository;
        _mapper = mapper;
    }

    public async Task<(bool hasNext, List<AuctionModel> data)> GetAsync(int limit, int skip, CancellationToken cancellationToken = default)
    {
        var entities = await _auctionRepository.GetAsync(limit, skip, cancellationToken);

        return (entities.hasNext, _mapper.Map<List<AuctionEntity>, List<AuctionModel>>(entities.data));
    }

    public async Task<AuctionDetailModel> GetOneAsync(Guid id, CancellationToken cancellationToken = default)
    {
        var entity = await _auctionRepository.GetOneAsync(id, cancellationToken);

        return _mapper.Map<AuctionEntity, AuctionDetailModel>(entity);
    }
}