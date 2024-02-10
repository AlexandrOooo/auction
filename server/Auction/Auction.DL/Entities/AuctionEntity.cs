using System.ComponentModel.DataAnnotations.Schema;
using Auction.DL.Entities.Base;

namespace Auction.DL.Entities;

public class AuctionEntity : BaseEntity
{
    public string Name { get; set; }
    public string Description { get; set; }
    public decimal StartPrice { get; set; }
    public bool IsArchived { get; set; }
    public DateTime ArchivedAt { get; set; }
    public List<PhotoEntity> Photos { get; set; }
    public List<UserAuctionEntity> Users { get; set; }
}