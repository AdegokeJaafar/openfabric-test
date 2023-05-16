import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products!: any[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe((data: any) => {
        this.products = data;
      });
  }

  deleteProduct(productId: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(productId).subscribe(
        () => {
          this.products = this.products.filter((product) => product.id !== productId);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
