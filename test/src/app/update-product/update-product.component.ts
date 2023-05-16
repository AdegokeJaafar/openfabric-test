import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProductToUpdate();
  }

  getProductToUpdate(): void {
    const productId = 'product-id'; 
    this.productService.getProductById(productId).subscribe(
      (product: Product) => {
        this.product = product;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  updateProduct(): void {
    this.productService.updateProduct(this.product).subscribe(
      () => {
        console.log('product successfully updated');
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
