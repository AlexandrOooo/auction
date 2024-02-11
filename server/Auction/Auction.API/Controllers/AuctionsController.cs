using System.Security.Claims;
using Auction.BL.Services.Abstract;
using Auction.Common.Contracts.Requests;
using Auction.Common.Models;
using Microsoft.AspNetCore.Authorization;
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
    
    [HttpGet("{id:guid}")]
    public async Task<IActionResult> GetOneAsync([FromRoute] Guid id, CancellationToken cancellationToken = default)
    {
        var result = await _auctionService.GetOneAsync(id, cancellationToken);

        return Ok(result);
    }

    [HttpPost]
    [Authorize]
    public async Task<IActionResult> CreateAsync([FromBody] CreateAuctionCommand command, [FromForm] List<IFormFile> files, CancellationToken cancellationToken = default)
    {
        AuctionDetailModel model = new()
        {
            Name = command.Name,
            Description = command.Description,
            StartPrice = command.StartPrice,
            EndAt = command.EndAt,
            Photos = command.Photos,
            OwnerId = Guid.Parse(User.FindFirst(ClaimTypes.Sid)?.Value),
        };

        return Ok(await _auctionService.CreateAsync(model, cancellationToken));
    }
    
    [HttpPut]
    [Authorize]
    public async Task<IActionResult> UpdateAsync([FromBody] AuctionDetailModel model, CancellationToken cancellationToken = default)
    {
        model.OwnerId = Guid.Parse(User.FindFirst(ClaimTypes.Sid)?.Value);
        return Ok(await _auctionService.UpdateAsync(model, cancellationToken));
    }
    
    [HttpPatch("archive/{id:guid}")]
    [Authorize]
    public async Task<IActionResult> ArchiveAsync([FromRoute] Guid id, CancellationToken cancellationToken = default)
        => Ok(await _auctionService.ArchiveAsync(id, cancellationToken));
}