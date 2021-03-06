﻿using System;
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
    public class Order
    {
        public Guid Id { get; set; }

        public Statuses Status { get; set; }
    }
}
