using PProjectShop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PProjectShop.ViewModels
{
    public class ProductsViewModel
    {
        public IEnumerable<Product> ProductsList { get; set; }
    }
}
