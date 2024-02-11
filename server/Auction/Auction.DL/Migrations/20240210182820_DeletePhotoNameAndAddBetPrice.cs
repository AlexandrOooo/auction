using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Auction.DL.Migrations
{
    /// <inheritdoc />
    public partial class DeletePhotoNameAndAddBetPrice : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Photos");

            migrationBuilder.AddColumn<decimal>(
                name: "BetPrice",
                table: "UsersAuctions",
                type: "numeric",
                nullable: false,
                defaultValue: 0m);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BetPrice",
                table: "UsersAuctions");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Photos",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
