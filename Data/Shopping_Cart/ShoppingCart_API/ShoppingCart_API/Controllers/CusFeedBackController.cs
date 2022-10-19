using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShoppingCart_API.Models;
using ShoppingCart_API.Repositories;

namespace ShoppingCart_API.Controllers
{
    /// <summary>
    /// 取得聯絡我
    /// </summary>
    /// <returns></returns>
    /// 
    [Route("api/")]
    [ApiController]
    public class CusFeedBackController : ControllerBase
    {
        /// <summary>
        /// 取得商品列表
        /// </summary>
        /// <returns></returns>
        /// 
        [Route("Cusfeedback")]
        [HttpGet]
        public IEnumerable<CusFeedBackModel> GetCusFeedBack()
        {
            var repository = new CusFeedBackRepository();
            var result = repository.GetCusFeedBack();
            return result;
        }

        /// <summary>
        /// 新增聯絡我
        /// </summary>
        /// <param name="CusFeedBackModel"></param>
        /// <returns></returns>
        /// 
        [Route("Cusfeedback")]
        [HttpPost]
        public ResultModel CreateFeedBack([FromBody] CusFeedBackModel cusFeedBackModel)
        {
            var result = new ResultModel();
            var repository = new CusFeedBackRepository();
            var data = repository.CreateFeedBack(cusFeedBackModel);
            if(data == true)
            {
                result.Result = data;
                result.Message = "聯絡我資訊，新增成功";
            }
            else
            {
                result.Result = data;
                result.Message = "聯絡我資訊，新增失敗，請重試";
            }
            return result;
        }
    }
}
