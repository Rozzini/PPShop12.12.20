using Microsoft.EntityFrameworkCore;
using PProjectShop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PProjectShop
{
    public class AppDbContext : DbContext
    {

        public DbSet<Category> Categories { get; set; }

        public DbSet<Product> Products { get; set; }

        public DbSet<Client> Clients { get; set; }

        public DbSet<Order> Orders { get; set; }



        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            Database.EnsureCreated();
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Order>().OwnsOne(x => x.BillingAddress);

            modelBuilder.Entity<Product>().HasOne(p => p.Category).WithMany().HasForeignKey(p => p.CategoryId);
        }


    }
}
