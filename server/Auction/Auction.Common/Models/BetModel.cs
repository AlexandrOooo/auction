namespace Auction.Common.Models;

public class BetModel
{
    public Guid Id { get; set; }
    public UserModel User { get; set; }
    public decimal BetPrice { get; set; }
}