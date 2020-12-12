using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PProjectShop.Models
{
    public class Category
    {

        public int CategoryId { get; set; }

        public string CategoryName { get; set; }

        public string CategoryDescription { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}
