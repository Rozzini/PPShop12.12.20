using PProjectShop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PProjectShop.Repository.Interfaces
{
    public interface IProductRepository
    {
        IEnumerable<Product> GetAllProducts();

        IEnumerable<Product> GetProductsByCategory(Guid Id);

        void CreateProduct(Product product);

        void SaveProduct(Product product);

        void DeleteProduct(int productId);
    }
}
