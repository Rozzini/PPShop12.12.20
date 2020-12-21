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
            var category = new Category
            {
                CategoryName = "aaa",
                CategoryDescription = "aaa",
            };

         

            Guid catId = _generalDataAccessRepository.GetCategoryId(category.CategoryName);
            var product = new Product
            {
                ProductName = "IPhon3",
                ProductDescription = "PlaceHolder Text1",
                ProductPrice = 200,
                ProductImage = "~/images/IPhone1.jfif",
                CategoryId = catId
            };
            var product1 = new Product
            {
                ProductName = "IPhon2",
                ProductDescription = "PlaceHolder Text2",
                ProductPrice = 2000,
                ProductImage = "~/images/IPhone1.jfif",
                CategoryId = catId
            };
            var product2 = new Product
            {
                ProductName = "XIAMOI",
                ProductDescription = "PlaceHolder Text3",
                ProductPrice = 1500,
                ProductImage = "~/images/IPhone1.jfif",
                CategoryId = catId
            };
            var product3 = new Product
            {
                ProductName = "Detroit",
                ProductDescription = "PlaceHolder Text4",
                ProductPrice = 400,
                ProductImage = "~/images/IPhone1.jfif",
                CategoryId = catId
            };
            _generalDataAccessRepository.CreateProduct(product1);
            _generalDataAccessRepository.CreateProduct(product2);
            _generalDataAccessRepository.CreateProduct(product3);
            _generalDataAccessRepository.CreateProduct(product);

            return _generalDataAccessRepository.GetAllProducts();
        }

        [HttpGet]
        public IEnumerable<Product> ShowProductsByCategory(Guid id)
        {
            return _generalDataAccessRepository.GetProductsByCategory(id);
        }
    }
}