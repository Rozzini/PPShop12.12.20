﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PProjectShop.Models
{
    public class Product
    {
        public int ProductId { get; set; }

        public string ProductName { get; set; }

        public string ProductDescription { get; set; }

        public string ProductImage { get; set; }

        public decimal ProductPrice { get; set; }

        [ForeignKey("CategoryId")]
        public int CategoryId { get; set; }

        public virtual Category Categories { get; set; }
    }
}