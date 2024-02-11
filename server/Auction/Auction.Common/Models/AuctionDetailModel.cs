namespace Auction.Common.Models;

public class AuctionDetailModel : AuctionModel
{
    public Guid OwnerId { get; set; }
    public string Description { get; set; }
    public DateTime? ArchivedAt { get; set; }
}