namespace Auction.Common.Models;

public class BetModel
{
    public Guid Id { get; set; }
    public string User { get; set; }
    public decimal BetPrice { get; set; }
}