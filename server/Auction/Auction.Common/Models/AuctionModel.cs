namespace Auction.Common.Models;

public class AuctionModel
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public decimal StartPrice { get; set; }
    public bool IsArchived { get; set; }
    public bool IsOwner { get; set; }
}