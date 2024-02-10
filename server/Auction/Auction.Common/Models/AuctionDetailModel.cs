namespace Auction.Common.Models;

public class AuctionDetailModel : AuctionModel
{
    public string Description { get; set; }
    public List<string> Photos { get; set; }
    public DateTime ArchivedAt { get; set; }
}