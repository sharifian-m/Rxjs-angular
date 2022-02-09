import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductList1Component } from './product-list1/product-list1.component';
import { ProductList2Component } from './product-list2/product-list2.component';
const routes: Routes = [
  {path:'' , component:ProductList1Component},
  {path:':products2' , component:ProductList2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
