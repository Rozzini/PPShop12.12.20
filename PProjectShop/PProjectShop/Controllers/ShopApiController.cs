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

        [HttpPost]

        public IActionResult CreateProduct(Product product)
        {
            _generalDataAccessRepository.CreateProduct(product);
            return StatusCode(200, "123");

        }

        public IActionResult TestCreateProductsAndCategories()
        {
            var IPhoneCat = new Category()
            {
                CategoryName = "Apple",
                CategoryDescription = "Apple"
            };

            var SamsungCat = new Category()
            {
                CategoryName = "Samsung",
                CategoryDescription = "Samsung"
            };

            var NokiaCat = new Category()
            {
                CategoryName = "Nokia",
                CategoryDescription = "Nokia"
            };


            _generalDataAccessRepository.CreateCategory(IPhoneCat);

            _generalDataAccessRepository.CreateCategory(SamsungCat);

            _generalDataAccessRepository.CreateCategory(NokiaCat);

            var IPhoneGuid = _generalDataAccessRepository.GetCategoryId("Apple");

            var SamsungGuid = _generalDataAccessRepository.GetCategoryId("Samsung");

            var NokiaGuid = _generalDataAccessRepository.GetCategoryId("Nokia");


            var product11 = new Product()
            {
                ProductName = "IPhone1",
                ProductDescription = "qwerqwer",
                ProductPrice = 500,
                ProductImage = "/IPhone1.jfif",
                CategoryId = IPhoneGuid
            };

            var product12 = new Product()
            {
                ProductName = "IPhone2",
                ProductDescription = "qwerqwer",
                ProductPrice = 550,
                ProductImage = "/IPhone2.jfif",
                CategoryId = IPhoneGuid
            };

            var product13 = new Product()
            {
                ProductName = "IPhone3",
                ProductDescription = "qwerqwer",
                ProductPrice = 700,
                ProductImage = "/IPhone3.jfif",
                CategoryId = IPhoneGuid
            };

            var product21 = new Product()
            {
                ProductName = "Samsung1",
                ProductDescription = "qwerqwer",
                ProductPrice = 400,
                ProductImage = "/Samsung1.jfif",
                CategoryId = SamsungGuid
            };

            var product22 = new Product()
            {
                ProductName = "Samsung2",
                ProductDescription = "qwerqwer",
                ProductPrice = 300,
                ProductImage = "/Samsung2.jfif",
                CategoryId = SamsungGuid
            };

            var product23 = new Product()
            {
                ProductName = "Samsung3",
                ProductDescription = "qwerqwer",
                ProductPrice = 200,
                ProductImage = "/Samsung3.jfif",
                CategoryId = SamsungGuid
            };

            var product31 = new Product()
            {
                ProductName = "Nokia1",
                ProductDescription = "qwerqwer",
                ProductPrice = 60,
                ProductImage = "/Nokia1.jfif",
                CategoryId = NokiaGuid
            };

            var product32 = new Product()
            {
                ProductName = "Nokia2",
                ProductDescription = "qwerqwer",
                ProductPrice = 55,
                ProductImage = "/Nokia2.jfif",
                CategoryId = NokiaGuid
            };

            var product33 = new Product()
            {
                ProductName = "Nokia3",
                ProductDescription = "qwerqwer",
                ProductPrice = 50050,
                ProductImage = "/Nokia3.jfif",
                CategoryId = NokiaGuid
            };

            _generalDataAccessRepository.CreateProduct(product11);
            _generalDataAccessRepository.CreateProduct(product12);
            _generalDataAccessRepository.CreateProduct(product13);
            _generalDataAccessRepository.CreateProduct(product21);
            _generalDataAccessRepository.CreateProduct(product22);
            _generalDataAccessRepository.CreateProduct(product23);
            _generalDataAccessRepository.CreateProduct(product31);
            _generalDataAccessRepository.CreateProduct(product32);
            _generalDataAccessRepository.CreateProduct(product33);
            return StatusCode(200, "123");

        }
    }
}