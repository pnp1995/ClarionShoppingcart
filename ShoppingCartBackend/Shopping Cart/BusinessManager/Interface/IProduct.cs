using Common.Model;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BusinessManager.Interface
{
   public interface IProduct
    {
        Task<string> AddProduct(ProductModel productmodel);
         List<ProductModel> GetAllProducts();
       // string ProductImageUpload(int Productid, IFormFile formFile);
        Task<IList<ProductModel>> GetProductbyid(int productId);

   }
}
