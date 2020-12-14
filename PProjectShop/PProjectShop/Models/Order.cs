using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace PProjectShop.Models
{
    public enum Statuses
    {
        [Description("Awaiting Payment")] AwaitingPayment = 1,
        [Description("Shipping")] Shipping = 2,
        [Description("Delivered")] Delivered = 3
    }

    //public class BillingAddress
    //{
    //    public string Country { get; set; }
    //    public string FirstName { get; set; }
    //    public string LastName { get; set; }
    //    public string AddressLine { get; set; }
    //    public string City { get; set; }
    //    public string State { get; set; }
    //    public int Zip { get; set; }
    //    public string PhoneNumber { get; set; }
    //}

    public class Order
    {
        public Guid Id { get; set; }

        //public ICollection<Product> OrderedProducts { get; set; }

        //public BillingAddress BillingAddress { get; set; }

        public Statuses Status { get; set; }
    }
}
