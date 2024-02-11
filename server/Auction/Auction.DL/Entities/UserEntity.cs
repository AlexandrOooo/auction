using Auction.DL.Entities.Base;

namespace Auction.DL.Entities;

public class UserEntity : BaseEntity
{
    public string Name { get; set; }
    public string Password { get; set; }
    public virtual List<UserAuctionEntity> Auctions { get; set; }
}

