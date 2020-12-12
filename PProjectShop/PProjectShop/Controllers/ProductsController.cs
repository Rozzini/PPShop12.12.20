using Microsoft.AspNetCore.Mvc;
using PProjectShop.Repository.Interfaces;
using PProjectShop.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PProjectShop.Controllers
{
    public class ProductsController : Controller
    {
        private readonly IProductRepository _productRepository;
        private readonly ICategoryRepository _categoryRepository;

        public ProductsController(IProductRepository productRepository, ICategoryRepository categoryRepository)
        {
            _productRepository = productRepository;
            _categoryRepository = categoryRepository;
        }

        [HttpGet]
        public IActionResult ShowAllProducts()
        {
            ProductsViewModel products = new ProductsViewModel();
            products.ProductsList = _productRepository.GetAllProducts();
            return View(products);
        }

        [HttpGet]
        public IActionResult ShowProductsByCategory(int id)
        {
            ProductsViewModel products = new ProductsViewModel();
            products.ProductsList = _productRepository.GetProductsByCategory(id);
            return View(products);
        }
    }
    
}
