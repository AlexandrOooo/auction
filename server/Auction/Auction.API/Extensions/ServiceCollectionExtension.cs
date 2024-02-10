using Auction.BL.Services;
using Auction.BL.Services.Abstract;
using Auction.DL.Repositories;
using Auction.DL.Repositories.Abstract;

namespace Auction.API.Extensions;

public static class ServiceCollectionExtension
{
    public static void AddServicesDependencies(this IServiceCollection services)
    {
        services
                .AddScoped<IAuctionsRepository, AuctionsRepository>()
                .AddScoped<IAuctionService, AuctionService>()
                .AddScoped<IBetsRepository, BetsRepository>()
                .AddScoped<IBetService, BetService>()
                .AddScoped<IPhotosRepository, PhotosRepository>();
    }
}