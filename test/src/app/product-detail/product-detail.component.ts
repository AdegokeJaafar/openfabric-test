import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const productId = params['id'];
      this.getProduct(productId);
    });
  }

  getProduct(productId: string) {
    this.productService.getProductById(productId).subscribe(
      (product: Product) => {
        this.product = product;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
