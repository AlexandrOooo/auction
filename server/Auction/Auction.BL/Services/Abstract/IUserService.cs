using Auction.Common.Models;

namespace Auction.BL.Services.Abstract;

public interface IUserService
{
    public Task<UserModel> RegisterAsync(string login, string password, CancellationToken cancellationToken = default);
    public Task<UserModel> LoginAsync(string login, string password, CancellationToken cancellationToken = default);
}