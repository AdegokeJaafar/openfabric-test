import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiBaseUrl = 'http://localhost:3001/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.apiBaseUrl);
  }
  getProductById(productId: string): Observable<any> {
    const url = `${this.apiBaseUrl}/${productId}`;
    return this.http.get(url);
  }
  addProduct(product: any): Observable<any> {
    return this.http.post(this.apiBaseUrl, product);
  }

  updateProduct(product: any): Observable<any> {
    const url = `${this.apiBaseUrl}/${product.id}`;
    return this.http.put(url, product);
  }

  deleteProduct(productId: number): Observable<any> {
    const url = `${this.apiBaseUrl}/${productId}`;
    return this.http.delete(url);
  }
}
