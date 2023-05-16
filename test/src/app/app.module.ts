import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';

const appRoute: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'form', component: ProductFormComponent },
  { path: 'update-product', component: UpdateProductComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    ProductDetailComponent,
    ProductFormComponent,
    UpdateProductComponent,
  ],
  imports: [
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
