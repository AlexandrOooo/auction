using System.Security.Claims;
using Auction.BL.Services.Abstract;
using Auction.Common.Contracts.Requests;
using Auction.Common.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Auction.API.Controllers;

[Authorize]
[Route("api/bets")]
public class BetsController: Controller
{
    private readonly IBetService _betService;

    public BetsController(IBetService betService)
    {
        _betService = betService;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetAsync([FromQuery] GetManyBetsRequest request, CancellationToken cancellationToken = default)
    {
        var result = await _betService.GetAsync(request, cancellationToken);
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
        var result = await _betService.GetOneAsync(id, cancellationToken);

        return Ok(result);
    }

    [HttpPost]
    public async Task<IActionResult> CreateAsync([FromBody] CreateBetCommand command, CancellationToken cancellationToken = default)
    {
        command.UserId = Guid.Parse(User.FindFirst(ClaimTypes.Sid)?.Value);
        return Ok(await _betService.CreateAsync(command, cancellationToken));
    }
}