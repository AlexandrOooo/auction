using Auction.BL.Services.Abstract;
using Auction.Common.Contracts.Requests;
using Auction.Common.Models;
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
    public async Task<IActionResult> GetAsync([FromQuery] GetManyAuctionsRequest request, CancellationToken cancellationToken = default)
    {
        var result = await _auctionService.GetAsync(request, cancellationToken);
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
    
    [HttpPost]
    public async Task<IActionResult> CreateAsync([FromBody] AuctionDetailModel model, CancellationToken cancellationToken = default) 
        => Ok(await _auctionService.CreateAsync(model, cancellationToken));
    
    [HttpPut]
    public async Task<IActionResult> UpdateAsync([FromBody] AuctionDetailModel model, CancellationToken cancellationToken = default)
        => Ok(await _auctionService.UpdateAsync(model, cancellationToken));
    
    [HttpPatch("/archive/{id:guid}")]
    public async Task<IActionResult> ArchiveAsync([FromRoute] Guid id, CancellationToken cancellationToken = default)
        => Ok(await _auctionService.ArchiveAsync(id, cancellationToken));
}