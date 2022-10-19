using Dapper;
using Microsoft.Data.SqlClient;
using ShoppingCart_API.Models;

namespace ShoppingCart_API.Repositories
{
    public class ProductRepository
    {
        /// <summary>
        /// 取得產品列表
        /// </summary>
        /// <returns></returns>

        public IEnumerable<ProductModel> GetProductList()
        {
            //與資料庫進行連線
            var connection = new SqlConnection(ConnectionHelper.connectionStr);

            //sql select products這張資料表
            var sql = @"SELECT * FROM TestShopping";

            //透過Dapper與資料庫連線後取回資料
            var result = connection.Query<ProductModel>(sql);

            return result;
        }

        /// <summary>
        /// 新增一筆商品
        /// </summary>
        /// <param name="productModel"></param>
        /// <returns></returns>
        public bool CreateProduct(ProductModel productModel)
        {
            var sql = @"INSERT INTO TestShopping
                        VALUES(@C_Id,
                               @Name,
                               @Quantity,
                               @Price)";
            var parameters = new DynamicParameters();
            parameters.Add("@C_Id", productModel.C_Id);
            parameters.Add("@Name", productModel.Name);
            parameters.Add("@Quantity", productModel.Quantity);
            parameters.Add("@Price", productModel.Price);

            var connection = new SqlConnection(ConnectionHelper.connectionStr);
            var result = connection.Execute(sql, parameters);
            return result > 0;
        }

        /// <summary>
        /// 修改商品內容
        /// </summary>
        /// <param name="productModel"></param>
        /// <returns></returns>
        public bool UpdateProduct(ProductModel productModel)
        {
            var sql = @"UPDATE TestShopping
                        SET Name = @Name,
                            Quantity = @Quantity,
                            Price = @Price
                        WHERE C_Id = @C_Id";
            var parameters = new DynamicParameters();
            parameters.Add("@C_Id", productModel.C_Id);
            parameters.Add("@Name", productModel.Name);
            parameters.Add("@Quantity", productModel.Quantity);
            parameters.Add("@Price", productModel.Price);
            
            var connection = new SqlConnection (ConnectionHelper.connectionStr);
            var result = connection.Execute(sql, parameters);
            return result > 0;
        }

        /// <summary>
        /// 刪除指定的商品
        /// </summary>
        /// <param name="C_Id"></param>
        /// <returns></returns>
        public bool RemoveProduct(int C_Id)
        {
            var sql = @"DELETE from TestShopping
                        WHERE C_Id = @C_Id";
            var parameters = new DynamicParameters();
            parameters.Add("@C_Id", C_Id);

            var connection = new SqlConnection (ConnectionHelper.connectionStr);
            var result = connection.Execute(sql, parameters);

            return result > 0;
        }
    }
}
