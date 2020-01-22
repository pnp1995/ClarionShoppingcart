using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessManager.Interface;
using Common.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
/// <summary>
/// Creating a ProductController
/// </summary>
namespace ShoppingCart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
  
    public class ProductController : ControllerBase
    {
        private readonly IProduct product;
        public ProductController(IProduct product)
        {
            this.product = product;
        }
        /// <summary>
        /// creating a Add Product Controller
        /// </summary>
        /// <param name="productmodel"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> AddProduct(ProductModel productmodel)
        {
            try
            {
                var result = await product.AddProduct(productmodel);
                return this.Ok(new { result });
            }
            catch (Exception ex)
            {
                return this.BadRequest(ex.Message);
            }
        }
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("list")]
        public IActionResult GetProducts()
        {
            var result = this.product.GetAllProducts();

            if (result.Equals(null))
            {
                return this.NotFound("no products found");
            }

            return this.Ok(new { result });

        }
        /// <summary>
        /// Upload the image
        /// </summary>
        /// <param name="Productid"></param>
        /// <param name="formFile"></param>
        /// <returns></returns>
        //[HttpPost]
        //[Route("image")]
        //public IActionResult ProductImageUpload(int Productid, IFormFile formFile)
        //{
        //    try
        //    {
        //        var result = product.ProductImageUpload(Productid, formFile);
        //        return Ok(new { result });
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest(ex.Message);
        //    }
        //}
        /// <summary>
        /// Creating a IndividualProduct Detail
        /// </summary>
        /// <param name="productId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("getProductById/{productId}")]
        public async Task<IActionResult> GetProductbyid(int productId)
            
        {
            var result = await this.product.GetProductbyid(productId);

            if (result != null)
            {
                return this.Ok(new { result });
            }
            else
            {
                return this.BadRequest();
            }
        }

    }
}