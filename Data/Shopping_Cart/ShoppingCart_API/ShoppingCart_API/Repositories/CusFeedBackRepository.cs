using Dapper;
using Microsoft.Data.SqlClient;
using ShoppingCart_API.Models;

namespace ShoppingCart_API.Repositories
{
    public class CusFeedBackRepository
    {
        /// <summary>
        /// 取得聯絡資料
        /// </summary>
        /// <returns></returns>
        /// 
        public IEnumerable<CusFeedBackModel> GetCusFeedBack()
        {
            //與資料庫進行連線
            var connection = new SqlConnection(ConnectionHelper.connectionStr);

            //sql select products這張資料表
            var sql = @"SELECT * FROM TestFeedback";

            //透過Dapper與資料庫連線後取回資料
            var result = connection.Query<CusFeedBackModel>(sql);

            return result;
        }
        /// <summary>
        /// 新增一個聯絡我
        /// </summary>
        /// <param name="CusFeedBackModel"></param>
        /// <returns></returns>
        /// 
        public bool CreateFeedBack(CusFeedBackModel cusFeedBackModel)
        {
            var sql = @"INSERT INTO TestFeedback
                        VALUES(@Name,
                               @E_mail,
                               @Detail,
                               @Reply)";
            var parameters = new DynamicParameters();
            parameters.Add("@Name", cusFeedBackModel.Name);
            parameters.Add("@E_mail", cusFeedBackModel.E_mail);
            parameters.Add("@Detail", cusFeedBackModel.Detail);
            parameters.Add("@Reply", cusFeedBackModel.Reply);

            var connection = new SqlConnection(ConnectionHelper.connectionStr);
            var result = connection.Execute(sql, parameters);
            return result > 0;
        }
    }
}
