using Auction.API.Extensions;
using Auction.BL.Mapper;
using Auction.DL;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddServicesDependencies();
builder.Services.AddAutoMapper(typeof(MapperProfile));
builder.Services.AddDbContext<ApplicationContext>(options =>
        options.UseNpgsql(builder.Configuration.GetConnectionString("Varenyky")));

var app = builder.Build();

app.MapControllers();

app.Run();