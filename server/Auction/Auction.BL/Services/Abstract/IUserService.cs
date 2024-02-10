using Auction.Common.Models;
using Auction.DL.Entities;

namespace Auction.BL.Services.Abstract;

public interface IUserService
{
    Task RegisterAsync(RegisterUserModels data, string callbackUrl);
    
    Task<AuthenticationModels> GenerateTokens(UserEntity user);
}