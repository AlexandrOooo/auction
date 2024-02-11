using Auction.Common.Enums;
using Auction.DL.Entities.Base;

namespace Auction.DL.Entities;

public class UserAuctionEntity : BaseEntity
{
    public Guid AuctionId { get; set; }
    public Guid UserId { get; set; }
    public decimal BetPrice { get; set; }
    public UserAuctionRelation Relation { get; set; }
    public AuctionEntity Auction { get; set; }
    public UserEntity User { get; set; }
}