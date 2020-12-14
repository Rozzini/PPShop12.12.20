using Microsoft.AspNetCore.Mvc;
using PProjectShop.Models;
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
            var products = new ProductsViewModel
            {
                ProductsList = _productRepository.GetAllProducts()
            };
           
            return View(products);
        }

        [HttpGet]
        public IActionResult ShowProductsByCategory(Guid id)
        {
            var products = new ProductsViewModel
            {
                ProductsList = _productRepository.GetProductsByCategory(id)
            };
            return View(products);
        }
    }
    
}
