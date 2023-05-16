import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product: any = {
    name: '',
    description: '',
    price: 0,
    imageUrl: ''
  };

  constructor(private productService: ProductService) {}

  addProduct() {
    this.productService.addProduct(this.product).subscribe(
      (response) => {
        console.log('Product added:', response);
        this.product = {
          name: '',
          description: '',
          price: 0,
          imageUrl: ''
        };
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
  }
}
