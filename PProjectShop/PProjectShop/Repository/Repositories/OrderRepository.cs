using PProjectShop.Models;
using PProjectShop.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PProjectShop.Repository.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly AppDbContext appDbContext;

        public OrderRepository(AppDbContext appDbContext)
        {
            this.appDbContext = appDbContext;
        }

        public void CreateOrder(Order order)
        {
            appDbContext.Orders.Add(order);
            appDbContext.SaveChanges();
        }

        public Order GetOrder(Guid orderId)
        {
            return appDbContext.Orders.FirstOrDefault(x => x.Id == orderId);
        }
    }
}
