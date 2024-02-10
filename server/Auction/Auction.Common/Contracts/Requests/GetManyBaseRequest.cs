namespace Auction.Common.Contracts.Requests;

public abstract class GetManyBaseRequest
{
    public int Limit { get; set; } = 10;

    public int Skip { get; set; } = 0;
}