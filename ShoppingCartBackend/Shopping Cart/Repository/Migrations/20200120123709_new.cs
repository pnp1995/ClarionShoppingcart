using Microsoft.EntityFrameworkCore.Migrations;

namespace Repository.Migrations
{
    public partial class @new : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_ProductDetail",
                table: "ProductDetail");

            migrationBuilder.DropColumn(
                name: "ProductPrice",
                table: "ProductDetail");

            migrationBuilder.RenameTable(
                name: "ProductDetail",
                newName: "ProductTable");

            migrationBuilder.RenameColumn(
                name: "Productid",
                table: "ProductTable",
                newName: "ProductID");

            migrationBuilder.RenameColumn(
                name: "ProductImage",
                table: "ProductTable",
                newName: "Image");

            migrationBuilder.RenameColumn(
                name: "ProductDescription",
                table: "ProductTable",
                newName: "Description");

            migrationBuilder.AddColumn<float>(
                name: "Price",
                table: "ProductTable",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProductTable",
                table: "ProductTable",
                column: "ProductID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_ProductTable",
                table: "ProductTable");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "ProductTable");

            migrationBuilder.RenameTable(
                name: "ProductTable",
                newName: "ProductDetail");

            migrationBuilder.RenameColumn(
                name: "ProductID",
                table: "ProductDetail",
                newName: "Productid");

            migrationBuilder.RenameColumn(
                name: "Image",
                table: "ProductDetail",
                newName: "ProductImage");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "ProductDetail",
                newName: "ProductDescription");

            migrationBuilder.AddColumn<int>(
                name: "ProductPrice",
                table: "ProductDetail",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProductDetail",
                table: "ProductDetail",
                column: "Productid");
        }
    }
}
