namespace Auction.Common.Models;

public class AuctionDetailModel : AuctionModel
{
    public Guid OwnerId { get; set; }
    public string Description { get; set; }
    public List<string?> Photos { get; set; }
    public BetModel LastBet { get; set; }
    public DateTime? ArchivedAt { get; set; }
}