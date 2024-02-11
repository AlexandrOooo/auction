namespace Auction.Common.Models;

public class AuctionModel
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public decimal StartPrice { get; set; }
    public DateTime EndAt { get; set; }
    public List<string?> Photos { get; set; }
    public BetModel LastBet { get; set; }
    public bool IsArchived { get; set; }
    public bool IsOwner { get; set; }
}