using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Auction.BL.Services.Abstract;
using Auction.Common.Contracts.Requests;
using Auction.Common.Enums;
using Auction.Common.Models;
using Auction.DL.Entities;
using Auction.DL.Repositories.Abstract;
using AutoMapper;
using Microsoft.IdentityModel.Tokens;

namespace Auction.BL.Services;

public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;
    private readonly IMapper _mapper;

    public UserService(IMapper mapper, IUserRepository userRepository)
    {
        _mapper = mapper;
        _userRepository = userRepository;
    }

    public async Task<UserModel> RegisterAsync(string login, string password, CancellationToken cancellationToken = default)
    {
        var userEntity = await _userRepository.CreateAsync(login, password, cancellationToken);

        return new UserModel
        {
            Name = userEntity.Name, Token = GenerateToken(login, userEntity.Id)
        };
    }

    public async Task<UserModel> LoginAsync(string login, string password, CancellationToken cancellationToken = default)
    {
        var userEntity = await _userRepository.GetOneAsync(login, password, cancellationToken);
        
        return new UserModel
        {
            Name = userEntity.Name, Token = GenerateToken(login, userEntity.Id)
        };
    }

    private string GenerateToken(string login, Guid userId)
    {
        var key = "A0WhLhZCy0TXXgzeYqmJOLvs0pFRNuNIw9YLs4k9lFcUoTFkRXaMcRiUy6B2sXnU"u8.ToArray();
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim(ClaimTypes.Name, login),
                new Claim(ClaimTypes.Sid, userId.ToString())
            }),
            Expires = DateTime.UtcNow.AddDays(1),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };

        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescriptor);

        return tokenHandler.WriteToken(token);
    }
}