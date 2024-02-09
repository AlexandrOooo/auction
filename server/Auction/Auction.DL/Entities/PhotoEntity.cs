using Auction.DL.Entities.Base;

namespace Auction.DL.Entities;

public class PhotoEntity : BaseEntity
{
    public byte[] Photo { get; set; }
    public string Name { get; set; }
    public AuctionEntity Auction { get; set; }
}