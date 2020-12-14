using PProjectShop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PProjectShop.Repository
{
    public class GeneralDataAccessRepository
    {
        private readonly AppDbContext appDbContext;

        public GeneralDataAccessRepository(AppDbContext appDbContext)
        {
            this.appDbContext = appDbContext;
        }

        public IEnumerable<Category> GetAllCategories()
        {
            return appDbContext.Categories.ToArray();
        }

        public void CreateCategory(Category category)
        {
            appDbContext.Categories.Add(category);
            appDbContext.SaveChanges();
        }

        public void DeleteCategory(Guid CategoryId)
        {
            throw new NotImplementedException();
        }

        public void SaveCategory(Category category)
        {
            throw new NotImplementedException();
        }

        public void CreateOrder(Order order)
        {
            appDbContext.Orders.Add(order);
            appDbContext.SaveChanges();
        }

        public Order GetOrder(Guid orderId)
        {
            return appDbContext.Orders.FirstOrDefault(x => x.Id == orderId);
        }

        public IEnumerable<Product> GetAllProducts()
        {
            return appDbContext.Products;
        }

        public IEnumerable<Product> GetProductsByCategory(Guid Id)
        {
            return appDbContext.Products.Where(x => x.CategoryId == Id).ToArray();
        }

        public void CreateProduct(Product product)
        {
            appDbContext.Products.Add(product);
            appDbContext.SaveChanges();
        }

        public void DeleteProduct(Guid productId)
        {
            throw new NotImplementedException();
        }

        public void SaveProduct(Product product)
        {
            throw new NotImplementedException();
        }
    }
}
