using PProjectShop.Models;
using PProjectShop.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PProjectShop.Repository.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly AppDbContext appDbContext;

        public CategoryRepository(AppDbContext appDbContext)
        {
            this.appDbContext = appDbContext;
        }

        public IEnumerable<Category> GetAllCategories()
        {
            return appDbContext.Categories;
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
    }
}
