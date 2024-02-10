using Auction.DL.Entities.Base;

namespace Auction.DL.Entities;

public class UserEntity : IdentityUser
{
    public string Name { get; set; }
    
    [ForeignKey("UserAuction")]
    public Guid IdUserAuction { get; set; }
    public virtual List<UserAuctionEntity> Auctions { get; set; }
}

