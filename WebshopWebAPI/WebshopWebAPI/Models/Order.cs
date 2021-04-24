using System;
using System.Collections.Generic;

#nullable disable

namespace WebshopWebAPI.Models
{
    public partial class Order
    {
        public Order()
        {
            OrderDetails = new HashSet<OrderDetail>();
        }

        public int OrderId { get; set; }
        public string Email { get; set; }
        public DateTime OrderDate { get; set; }
        public int TotalPrice { get; set; }

        public virtual User EmailNavigation { get; set; }
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
