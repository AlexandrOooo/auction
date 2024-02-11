using Auction.BL.Services;
using Auction.BL.Services.Abstract;
using Auction.Common.Contracts.Requests;
using Auction.Common.Models;
using Microsoft.AspNetCore.Mvc;

namespace Auction.API.Controllers;

[Route("api/users")]
public class UsersController: Controller
{
    private readonly IUserService _userService;

    public UsersController(IUserService userService)
    {
        _userService = userService;
    }
    
    [HttpPost("register")]
    public async Task<IActionResult> RegisterAsync([FromBody] UserCommand command, CancellationToken cancellationToken = default)
    {
        return Ok(await _userService.RegisterAsync(command.Login, command.Password, cancellationToken));
    }
    
    [HttpPost("login")]
    public async Task<IActionResult> LoginAsync([FromBody] UserCommand command, CancellationToken cancellationToken = default)
    {
        return Ok(await _userService.LoginAsync(command.Login, command.Password, cancellationToken));
    }
}