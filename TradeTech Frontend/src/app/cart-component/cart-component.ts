import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../cart-service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cart-component',
  imports: [NgFor],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.css'
})
export class CartComponent implements OnInit{
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeItem(product: Product): void {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.getCartItems();
  }
}
