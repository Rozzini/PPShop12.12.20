using PProjectShop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PProjectShop.Repository.Interfaces
{
    public interface ICategoryRepository
    {
        IEnumerable<Category> GetAllCategories();

        void CreateCategory(Category category);

        void SaveCategory(Category category);

        void DeleteCategory(int CategoryId);
    }
}
