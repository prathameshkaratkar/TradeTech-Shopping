import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../product-service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [FormsModule, NgFor],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit{
  

  products: Product[] = [];
  productForm: Product = { name: '', description: '', price: 0, imageUrl: '', category: { name: '' } };
  isEditing = false;
  editingId: number | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe(data => this.products = data);
  }

  saveProduct() {
    if (this.isEditing && this.editingId !== null) {
      this.productService.updateProduct(this.editingId, this.productForm).subscribe(() => {
        this.resetForm();
        this.loadProducts();
      });
    } else {
      this.productService.addProduct(this.productForm).subscribe(() => {
        this.resetForm();
        this.loadProducts();
      });
    }
  }

  editProduct(product: Product) {
    this.productForm = { ...product };
    this.editingId = product.id!;
    this.isEditing = true;
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => this.loadProducts());
  }

  resetForm() {
    this.productForm = { name: '', description: '', price: 0, imageUrl: '', category: { name: '' } };
    this.isEditing = false;
    this.editingId = null;
  }
}
