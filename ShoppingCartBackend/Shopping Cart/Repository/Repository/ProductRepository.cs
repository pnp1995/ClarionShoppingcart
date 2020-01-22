using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Common.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Repository.Context;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repository
{
   public class ProductRepository : IProductRepo
    {
        private readonly ProductContext productContext;
        public ProductRepository(ProductContext productContext)
        {
            this.productContext = productContext;
        }
        /// <summary>
        /// Creat class AddProduct for add the product detail
        /// </summary>
        /// <param name="productmodel"></param>
        /// <returns></returns>
        public Task AddProduct(ProductModel productmodel)
        {
            ProductModel productModel = new ProductModel()
            {
                ProductID = productmodel.ProductID,
                ProductName = productmodel.ProductName,
                Image = productmodel.Image,
                Description = productmodel.Description,
                Price = productmodel.Price
            };
            productContext.ProductTable.Add(productmodel);
            return Task.Run(() => productContext.SaveChanges());
        }
        /// <summary>
        /// Creat a class GetAllProduct for getting all list of product
        /// </summary>
        /// <returns></returns>
        public List<ProductModel> GetAllProducts()
        {
            try
            {
                List<ProductModel> productList = new List<ProductModel>();
                productList = this.productContext.ProductTable.Select(x => new ProductModel
                {
                    ProductID = x.ProductID,
                    ProductName = x.ProductName,
                    Image = x.Image,
                    Description = x.Description,
                    Price = x.Price,
                   

                }).ToList();
                return productList;
            }
            catch (Exception e)
            {
                throw e;
            }
        }
        //public string ProductImageUpload(int Productid, IFormFile file)
        //{
        //    var path = file.OpenReadStream();
        //    var fileName = file.FileName;
        //    CloudinaryDotNet.Account cloudinary = new CloudinaryDotNet.Account("dtddmoers", "745684864855497", "b4WAINSfnC1hJPAyikC525T3HUM");
        //    CloudinaryDotNet.Cloudinary cloud = new CloudinaryDotNet.Cloudinary(cloudinary);
        //    var Uploadfile = new ImageUploadParams()
        //    {
        //        File = new FileDescription(fileName, path)
        //    };
        //    var data = cloud.Upload(Uploadfile);
        //    var result = productContext.ProductDetail.Where(i => i.Productid == Productid).SingleOrDefault();
        //    result.ProductImage = data.Uri.ToString();
        //    productContext.SaveChanges();
        //    return result.ProductImage;
        //    //var profileUrl = result.ProductImage;
        //    //return profileUrl;
        //   //return result.ToString();
        //}
        public async Task<IList<ProductModel>> GetProductbyid(int productId)
        {
            //var user = await this.productContext.FindAsync(pid);


            var prod = await productContext.ProductTable.Where(x => x.ProductID == productId).ToListAsync();

            if (prod != null)
            {
                return prod;
            }
            else
            {
                throw new Exception();
            }

        }
        //public  IList<ProductModel> Productbyid (int Productid)
        //{
        //    IList<ProductModel> list = new List<ProductModel>();
        //    var result = productContext.ProductDetail.Where(i => i.Productid == Productid);
        //    if (result != null)
        //    {
        //        //ProductModel note = productContext.ProductDetail.Where(p => p.Productid == Productid).FirstOrDefault();
        //        foreach(var l in result)
        //        {
        //            list.Add(l);
        //        }
        //        return list.ToList() ;
        //    }
        //    else
        //    {
        //        return null;
        //    }
        //}



    }

}
   

