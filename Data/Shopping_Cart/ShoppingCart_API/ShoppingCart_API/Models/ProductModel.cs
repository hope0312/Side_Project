namespace ShoppingCart_API.Models
{
    public class ProductModel
    {
        /// <summary>
        ///商品ID
        /// <summary>
        public int C_Id { get; set; }

        /// <summary>
        ///商品名稱
        /// <summary>
        public string? Name { get; set; }

        /// <summary>
        ///商品數量
        /// <summary>
        public int? Quantity { get; set; }
        /// <summary>
        ///商品價格
        /// <summary>
        public int? Price { get; set; }
    }
}
