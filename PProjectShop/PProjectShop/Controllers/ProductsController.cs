using Microsoft.AspNetCore.Mvc;
using PProjectShop.Models;
using PProjectShop.Repository;

using PProjectShop.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PProjectShop.Controllers
{
    public class ProductsController : Controller
    {
        private readonly GeneralDataAccessRepository _generalDataAccessRepository;

        public ProductsController(GeneralDataAccessRepository generalDataAccessRepository)
        {
            _generalDataAccessRepository = generalDataAccessRepository;

        }

        [HttpGet]
        public IActionResult ShowAllProducts()
        {
            var products = new ProductsViewModel
            {
                ProductsList = _generalDataAccessRepository.GetAllProducts()
            };
          
            return View(products);
        }

        [HttpGet]
        public IActionResult ShowProductsByCategory(Guid id)
        {
            var products = new ProductsViewModel
            {
                ProductsList = _generalDataAccessRepository.GetProductsByCategory(id)
            };

            return View(products);
        }
    }
    
}
