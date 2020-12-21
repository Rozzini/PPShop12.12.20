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
        public IEnumerable<Product> ShowAllProducts()
        {
            //var category = new Category
            //{
            //    CategoryName = "aaa",
            //    CategoryDescription = "aaa",
            //};

            //_generalDataAccessRepository.CreateCategory(category);

            //Guid catId = _generalDataAccessRepository.GetCategoryId(category.CategoryName);
            //var product = new Product
            //{
            //    ProductName = "IIIII",
            //    ProductDescription = "asdasdasd",
            //    ProductPrice = 800,
            //    ProductImage = "~/images/IPhone1.jfif",
            //    CategoryId = catId
            //};

            //_generalDataAccessRepository.CreateProduct(product);

            return _generalDataAccessRepository.GetAllProducts();
        }

        [HttpGet]
        public IEnumerable<Product> ShowProductsByCategory(Guid id)
        {
            return _generalDataAccessRepository.GetProductsByCategory(id);
        }
    }
}