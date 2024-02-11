using Auction.BL.Services.Abstract;
using Auction.Common.Contracts.Requests;
using Auction.Common.Enums;
using Auction.Common.Models;
using Auction.DL.Entities;
using Auction.DL.Repositories.Abstract;
using AutoMapper;

namespace Auction.BL.Services;

public class AuctionService : IAuctionService
{
    private readonly IAuctionsRepository _auctionRepository;
    private readonly IBetsRepository _betsRepository;
    private readonly IPhotosRepository _photosRepository;
    private readonly IMapper _mapper;

    public AuctionService(IAuctionsRepository auctionRepository, IMapper mapper, IBetsRepository betsRepository, IPhotosRepository photosRepository)
    {
        _auctionRepository = auctionRepository;
        _mapper = mapper;
        _betsRepository = betsRepository;
        _photosRepository = photosRepository;
    }

    public async Task<(bool hasNext, List<AuctionModel> data)> GetAsync(GetManyAuctionsRequest request, CancellationToken cancellationToken = default)
    {
        var entities = await _auctionRepository.GetAsync(request.Limit, request.Skip, request.IsArchived, cancellationToken);

        return (entities.hasNext, _mapper.Map<List<AuctionEntity>, List<AuctionModel>>(entities.data));
    }

    public async Task<AuctionDetailModel> GetOneAsync(Guid id, CancellationToken cancellationToken = default)
    {
        var entity = await _auctionRepository.GetOneAsync(id, cancellationToken);
        var lastBetEntity = await _betsRepository.GetLastOneAsync(entity.Id, cancellationToken: cancellationToken);
        
        var model = _mapper.Map<AuctionEntity, AuctionDetailModel>(entity);
        model.LastBet = _mapper.Map<UserAuctionEntity, BetModel>(lastBetEntity);
        
        var photos = await _photosRepository.GetAsync(id, cancellationToken);
        model.Photos = photos.Select(x => System.Text.Encoding.Default.GetString(x.Photo)).ToList();

        return model;
    }

    public async Task<AuctionDetailModel> CreateAsync(AuctionDetailModel model, CancellationToken cancellationToken = default)
    {
        var entity = await _auctionRepository.CreateAsync(_mapper.Map<AuctionDetailModel, AuctionEntity>(model), cancellationToken);
        
        await _betsRepository.CreateAsync(new UserAuctionEntity
        {
            AuctionId = entity.Id,
            UserId = model.OwnerId,
            BetPrice = entity.StartPrice,
            Relation = UserAuctionRelation.Owner
        }, cancellationToken);

        foreach (var photo in model.Photos)
        {
            await _photosRepository.CreateAsync(entity.Id, Convert.FromBase64String(photo), cancellationToken);
        }
        
        return await GetOneAsync(entity.Id, cancellationToken);
    }

    public async Task<AuctionDetailModel> UpdateAsync(AuctionDetailModel model, CancellationToken cancellationToken = default)
    {
        var entity = await _auctionRepository.UpdateAsync(_mapper.Map<AuctionDetailModel, AuctionEntity>(model), cancellationToken);

        return await GetOneAsync(entity.Id, cancellationToken);
    }

    public async Task<AuctionDetailModel> ArchiveAsync(Guid id, CancellationToken cancellationToken = default)
    {
        var auction = await GetOneAsync(id, cancellationToken);
        auction.IsArchived = true;
        auction.ArchivedAt = DateTime.Now;

        return await UpdateAsync(auction, cancellationToken);
    }
}