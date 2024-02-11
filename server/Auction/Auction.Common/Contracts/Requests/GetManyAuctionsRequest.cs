namespace Auction.Common.Contracts.Requests;

public class GetManyAuctionsRequest : GetManyBaseRequest
{
    public bool IsArchived { get; set; }
}