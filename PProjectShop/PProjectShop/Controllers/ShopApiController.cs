using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PProjectShop.Models;
using PProjectShop.Repository;
using PProjectShop.ViewModels;

namespace PProjectShop.Controllers
{
    [Route("api/[action]")]
    [ApiController]
    public class ShopApiController : ControllerBase
    {
        private readonly GeneralDataAccessRepository _generalDataAccessRepository;

        public ShopApiController(GeneralDataAccessRepository generalDataAccessRepository)
        {
            _generalDataAccessRepository = generalDataAccessRepository;
        }
        [HttpGet]
        public IEnumerable<Product> GetAllProducts()
        {
            return _generalDataAccessRepository.GetAllProducts();
        }

        public IEnumerable<Category> GetAllCategories()
        {
            return _generalDataAccessRepository.GetAllCategories();
        }

        [HttpGet]
        public IEnumerable<Product> ShowProductsByCategory(string categoryName)
        {
            Guid id = _generalDataAccessRepository.GetCategoryId(categoryName);
            return _generalDataAccessRepository.GetProductsByCategory(id);
        }

        //[HttpPost]

        //public IActionResult CreateProduct(Product product)
        //{
        //     _generalDataAccessRepository.CreateProduct(product);
            
        //}
    }
}