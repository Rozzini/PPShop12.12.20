﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PProjectShop.Models
{
    public class Product
    {
        public Guid Id { get; set; }


        public string ProductName { get; set; }

        public string ProductDescription { get; set; }

        public string ProductImage { get; set; }

        public decimal ProductPrice { get; set; }

        public Guid CategoryId { get; set; }

        public virtual Category Category { get; set; }

    }
}
