
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { catchError, combineLatest, EMPTY, filter, map, tap } from 'rxjs';
import { SuppliersService } from 'src/app/suppliers.service';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-products-detailes',
  templateUrl: './products-detailes.component.html',
  styleUrls: ['./products-detailes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsDetailesComponent   {
 
  
  selectedProduct$=this.productservice.selectedProduct$.pipe(
    tap(x=>console.log(x)
    ),
    catchError(err => {
      console.log('error occure');
      return EMPTY
    })
   );
   productSuppliers$=this.supplierservice.selectedProductSuppliers$
   vm$ = combineLatest([
    this.selectedProduct$,
    this.productSuppliers$,
    // this.pageTitle$
  ])
    .pipe(
      filter(([product]) => Boolean(product)),
      map(([product, productSuppliers ]) =>
        ({ product, productSuppliers }))
    );
  constructor(private productservice: ProductsService,
    private supplierservice:SuppliersService) { }
}
