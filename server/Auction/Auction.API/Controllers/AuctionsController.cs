using Auction.BL.Services.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace Auction.API.Controllers;

[Route("api/auctions")]
public class AuctionsController: Controller
{
    private readonly IAuctionService _auctionService;

    public AuctionsController(IAuctionService auctionService)
    {
        _auctionService = auctionService;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetAsync([FromQuery] int limit = 10, int skip = 0, CancellationToken cancellationToken = default)
    {
        var result = await _auctionService.GetAsync(limit, skip, cancellationToken);
        Dictionary<string, object> meta = new()
        {
            {
                nameof(result.hasNext), result.hasNext
            }
        };

        return result.data.Any() ? Ok(new {result.data, meta}) : NoContent();
    }
    
    [HttpGet("/{id:guid}")]
    public async Task<IActionResult> GetOneAsync([FromRoute] Guid id, CancellationToken cancellationToken = default)
    {
        var result = await _auctionService.GetOneAsync(id, cancellationToken);

        return Ok(result);
    }
}