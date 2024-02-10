using Auction.DL.Entities;
using Microsoft.EntityFrameworkCore;

namespace Auction.DL;

public class ApplicationContext : DbContext
{
    public DbSet<AuctionEntity> Auctions { get; set; }
    public DbSet<UserEntity> Users { get; set; }
    public DbSet<PhotoEntity> Photos { get; set; }
    public DbSet<UserAuctionEntity> UsersAuctions { get; set; }
    
    public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AuctionEntity>()
                    .HasMany(x => x.Photos)
                    .WithOne(x => x.Auction)
                    .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<UserAuctionEntity>()
                    .HasOne(x => x.Auction)
                    .WithMany(x => x.Users)
                    .HasForeignKey(x => x.AuctionId)
                    .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<UserAuctionEntity>()
                    .HasOne(x => x.User)
                    .WithMany(x => x.Auctions)
                    .HasForeignKey(x => x.UserId)
                    .OnDelete(DeleteBehavior.Restrict);
    }
}