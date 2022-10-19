namespace ShoppingCart_API.Repositories
{
    /// <summary>
    /// 連線到商品資料表
    /// </summary>
    public class ConnectionHelper
    {
        /// <summary>
        /// 連線字串
        /// </summary>
        private static string _connectionStr = @"Server=localhost;Database=TestClient;User ID=sa;Password=123456;TrustServerCertificate=true;";

        /// <summary>
        /// 資料庫連線
        /// </summary>
        public static string connectionStr { get { return _connectionStr; } }
    }
}
