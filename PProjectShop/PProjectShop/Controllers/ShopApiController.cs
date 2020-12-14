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
            //var products = new ProductsViewModel
            //{
            //    ProductsList = _generalDataAccessRepository.GetAllProducts()
            //};

            return _generalDataAccessRepository.GetAllProducts();
        }

        [HttpGet]
        public IEnumerable<Product> ShowProductsByCategory(Guid id)
        {
            //var products = new ProductsViewModel
            //{
            //    ProductsList = _generalDataAccessRepository.GetProductsByCategory(id)
            //};
            return _generalDataAccessRepository.GetProductsByCategory(id);
        }
    }
}