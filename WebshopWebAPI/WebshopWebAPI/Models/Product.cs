using System;
using System.Collections.Generic;

#nullable disable

namespace WebshopWebAPI.Models
{
    public partial class Product
    {
        public Product()
        {
            OrderDetails = new HashSet<OrderDetail>();
        }

        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Price { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }

        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
