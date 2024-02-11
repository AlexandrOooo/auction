using Auction.Common.Enums;
using Auction.DL.Entities;
using Auction.DL.Repositories.Abstract;
using Microsoft.EntityFrameworkCore;

namespace Auction.DL.Repositories;

public class UsersRepository : IUserRepository, IDisposable
{
    private readonly ApplicationContext _context;

    public UsersRepository(ApplicationContext context)
    {
        _context = context;
    }

    public async Task<UserEntity> GetOneAsync(string login, string password, CancellationToken cancellationToken = default)
    {
        return await _context.Users.FirstOrDefaultAsync(x => x.Name == login && x.Password == password, cancellationToken);
    }

    public async Task<UserEntity> CreateAsync(string login, string password, CancellationToken cancellationToken = default)
    {
        var entry = _context.Users.Add(new UserEntity { Name = login, Password = password});

        await _context.SaveChangesAsync(cancellationToken);

        return entry.Entity;
    }

    public void Dispose()
    {
        _context.Dispose();
    }
}