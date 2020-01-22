using Common.Model;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IProductRepo
    {
        Task AddProduct(ProductModel productmodel);
      
        List<ProductModel> GetAllProducts();
      
        //string ProductImageUpload(int Productid, IFormFile file);
        
        Task<IList<ProductModel>> GetProductbyid(int productId);

    }
}
