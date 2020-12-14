using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PProjectShop.Models
{
    public class Category
    {

        public Guid Id { get; set; }


        public string CategoryName { get; set; }

        public string CategoryDescription { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}
