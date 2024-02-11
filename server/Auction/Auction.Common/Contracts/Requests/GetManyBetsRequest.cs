namespace Auction.Common.Contracts.Requests;

public class GetManyBetsRequest : GetManyBaseRequest
{
    public Guid? AuctionId { get; set; } 
}