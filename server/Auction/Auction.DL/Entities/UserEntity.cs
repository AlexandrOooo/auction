using Auction.DL.Entities.Base;

namespace Auction.DL.Entities;

public class UserEntity : BaseEntity
{
    public string Name { get; set; }
    public List<UserAuctionEntity> Auctions { get; set; }
}