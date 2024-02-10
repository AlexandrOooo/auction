namespace Auction.Common.Contracts.Requests;

public class CreateBetCommand
{
    public decimal BetPrice { get; set; }
    public Guid UserId { get; set; }
    public Guid AuctionId { get; set; }
}