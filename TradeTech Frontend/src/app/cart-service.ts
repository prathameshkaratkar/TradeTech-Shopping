import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];

  addToCart(product: Product): void {
    this.cartItems.push(product);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  removeFromCart(productToRemove: Product): void {
    this.cartItems = this.cartItems.filter(p => p !== productToRemove)
  }
  constructor() { }
}
