using Auction.DL.Entities.Base;

namespace Auction.DL.Entities;

public class PhotoEntity : BaseEntity
{
    public byte[] Photo { get; set; }
    public Guid AuctionId { get; set; }
    public AuctionEntity Auction { get; set; }
}