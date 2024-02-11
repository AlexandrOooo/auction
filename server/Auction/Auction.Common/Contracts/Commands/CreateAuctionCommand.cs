namespace Auction.Common.Contracts.Requests;

public class CreateAuctionCommand
{
    public string Name { get; set; }
    public string Description { get; set; }
    public decimal StartPrice { get; set; }
    public List<string> Photos { get; set; }
    public DateTime EndAt { get; set; }
}