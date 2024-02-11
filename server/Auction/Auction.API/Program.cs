using System.Text;
using Auction.API.Extensions;
using Auction.BL.Mapper;
using Auction.DL;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddAutoMapper(typeof(MapperProfile));
builder.Services.AddDbContext<ApplicationContext>(options =>
        options.UseNpgsql(builder.Configuration.GetConnectionString("Varenyky")));

builder.Services.AddCors();
builder.Services.AddMvc(o =>
                       o.SuppressAsyncSuffixInActionNames = false)
       .AddDataAnnotationsLocalization();

builder.Services.AddServicesDependencies();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
       .AddJwtBearer(options =>
       {
               options.TokenValidationParameters = new TokenValidationParameters
               {
                       ValidateIssuer = false,
                       ValidateAudience = false,
                       ValidateLifetime = true,
                       ValidateIssuerSigningKey = true,
                       IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("A0WhLhZCy0TXXgzeYqmJOLvs0pFRNuNIw9YLs4k9lFcUoTFkRXaMcRiUy6B2sXnU"))
               };
       });
builder.Services.AddControllers();

var app = builder.Build();

app.UseRouting();
app.UseCors(x => x
                 .AllowAnyMethod()
                 .AllowAnyHeader()
                 .SetIsOriginAllowed(origin => true) // allow any origin
                 .AllowCredentials()); 
app.UseAuthentication();
app.UseAuthorization();
app.UseEndpoints(endpoints => { endpoints.MapControllers(); });

app.Run();