using Auction.Common.Models;
using Auction.DL.Entities;
using AutoMapper;

namespace Auction.BL.Mapper;

public class MapperProfile : Profile
{
    public MapperProfile()
    {
        CreateMap<AuctionEntity, AuctionModel>().ReverseMap();

        CreateMap<AuctionEntity, AuctionDetailModel>()
                .ForMember(x => x.Photos,
                    opt => opt.Ignore());
        
        CreateMap<AuctionDetailModel, AuctionEntity>()
                .ForMember(x => x.Photos,
                    opt => opt.Ignore());
        
        CreateMap<UserAuctionEntity, BetModel>()
                .ForMember(x => x.User, 
                    opt => opt.MapFrom(x => x.User.Name)).ReverseMap();
    }
}