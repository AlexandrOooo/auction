using Auction.DL.Entities;

namespace Auction.DL.Repositories.Abstract;

public interface IUserRepository
{
    public Task<UserEntity> GetOneAsync(string login, string password, CancellationToken cancellationToken = default);
    public Task<UserEntity> CreateAsync(string login, string password, CancellationToken cancellationToken = default);
}