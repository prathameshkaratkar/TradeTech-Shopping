import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service';
import { Product } from '../models/product';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { CartService } from '../cart-service';
import { Router } from '@angular/router';
// Update the import path to match the actual file location and name
 // Import Product interface or class

@Component({
  selector: 'app-shop-component',
  standalone:true,
  imports: [NgFor],
  templateUrl: './shop-component.html',
  styleUrl: './shop-component.css'
})
export class ShopComponent implements OnInit{
  // products = [
  //   {id:1, name: 'HP All-in-One',image:"HP-All-in-One.jpeg"},
  //   {id:2, name: 'Lenovo A100',image:'/public/Lenovo A100.jpeg'},
  //   {id:3, name:'Mac M4 Chip',image:'/public/Mac M4 Chip.webp'},
  //   {id:4,name:'ASUS AIO A3202',image:'/public/Asus AIO A3202.webp'}
  // ];

  products: Product[] = [];

  

  constructor(private productService: ProductService, private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log('Products:', this.products);
      },
      error: (err) => {
        console.error('Failed to fetch products:', err);
      }
    });
  }

  showAll() {
    alert('Show all products!')
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.router.navigate(['/cart'])
    console.log('Added to cart:',product)
  }
}
