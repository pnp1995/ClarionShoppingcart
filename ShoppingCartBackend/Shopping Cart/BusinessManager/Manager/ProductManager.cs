using BusinessManager.Interface;
using Common.Model;
using Microsoft.AspNetCore.Http;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BusinessManager.Manager
{
    public class ProductManager : IProduct
    {
        private readonly IProductRepo productRepo;
        public ProductManager(IProductRepo productRepo)
        {
            this.productRepo = productRepo;
        }
        public async Task<string> AddProduct(ProductModel productmodel)
        {
            try
            {
                await this.productRepo.AddProduct(productmodel);
                return "Product added Successfully";
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        public List<ProductModel> GetAllProducts()
        {
            List<ProductModel> list = new List<ProductModel>();
            list = productRepo.GetAllProducts();

            if (list != null)
            {
                return list;
            }
            else
            {
                throw new Exception();
            }
        }
        //public string ProductImageUpload(int Productid, IFormFile formFile)
        //{
        //    try
        //    {
        //        productRepo.ProductImageUpload(Productid, formFile);
        //        return "Image upload Successfully";
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception(ex.Message);
        //    }
        //}
        public async Task<IList<ProductModel>> GetProductbyid(int productId)

        {
            if(!productId.Equals(null))
            {
                var result =await this.productRepo.GetProductbyid(productId);

                if(result != null)
                    {
                    return result;

                }
                else
                {
                    throw new Exception("");
                }
            }
            else
            {
                throw new Exception();
            }
        }
    }
}
