using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShoppingCart_API.Models;
using ShoppingCart_API.Repositories;

namespace ShoppingCart_API.Controllers
{
    /// <summary>
    /// 商品
    /// </summary>
    [Route("api/")]
    [ApiController]
    public class PoructController : ControllerBase
    {
        /// <summary>
        /// 取得商品列表
        /// </summary>
        /// <returns></returns>
        [Route("Product")]
        [HttpGet]
        public IEnumerable<ProductModel> GetProductList()
        {
            var repository = new ProductRepository();
            var result = repository.GetProductList();
            return result;
        }

        /// <summary>
        /// 新增商品
        /// </summary>
        /// <param name="productModel"></param>
        /// <returns></returns>
        [Route("Product")]
        [HttpPost]
        public ResultModel CreateProduct([FromBody] ProductModel productModel)
        {
            var result = new ResultModel();
            var repository = new ProductRepository();
            var data = repository.CreateProduct(productModel);


            if (data == true)
            {
                result.Result = data;
                result.Message = "新增商品成功";
            }
            else
            {
                result.Result = data;
                result.Message = "新增商品失敗，請重試";
            }

            return result;
        }

        /// <summary>
        /// 修改商品
        /// </summary>
        /// <param name="productModel"></param>
        /// <returns></returns>
        [Route("Product")]
        [HttpPatch]
        public ResultModel UpdateProduct([FromBody] ProductModel productModel)
        {
            var result = new ResultModel();
            var repository = new ProductRepository();
            var data = repository.UpdateProduct(productModel);

            if(data == true)
            {
                result.Result = data;
                result.Message = "修改商品成功";
            }
            else
            {
                result.Result = data;
                result.Message = "修改商品失敗，請重試";
            }
            return result;
        }

        /// <summary>
        /// 刪除指定商品
        /// </summary>
        /// <param name="C_Id"></param>
        /// <returns></returns>
        [Route("Product/{C_Id}")]
        [HttpDelete]
        public ResultModel RemoveProduct(int C_Id)
        {
            var result = new ResultModel();
            var repository = new ProductRepository();
            var data = repository.RemoveProduct(C_Id);

            if(data == true)
            {
                result.Result = data;
                result.Message = "刪除商品成功";
            }
            else
            {
                result.Result = data;
                result.Message = "刪除商品失敗，請重試";
            }
            return result;
        }
    }
}
