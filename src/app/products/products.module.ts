import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductList1Component } from './product-list1/product-list1.component';
import { ProductList2Component } from './product-list2/product-list2.component';
import { ProductsComponent } from './product-list2/products/products.component';
import { ProductsDetailesComponent } from './product-list2/products-detailes/products-detailes.component';


@NgModule({
  declarations: [
    ProductList1Component,
    ProductList2Component,
    ProductsComponent,
    ProductsDetailesComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
