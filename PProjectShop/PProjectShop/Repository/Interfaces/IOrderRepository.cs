using PProjectShop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PProjectShop.Repository.Interfaces
{
    public interface IOrderRepository
    {
        Order GetOrder(int orderId);

        void CreateOrder(Order order);
    }
}
