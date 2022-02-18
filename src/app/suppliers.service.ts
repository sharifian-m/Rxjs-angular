import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, combineLatest, EMPTY, filter, from, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { Supplier } from './products/models/Supplier';
import { ProductsService } from './products/products.service';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  private suppliersUrl = 'api/suppliers';

     
  suppliersList$= this.http.get<Supplier[]>(this.suppliersUrl).pipe(
  tap(product=> console.table(product)),
  catchError(err=>{
    console.log("error occure");
    return EMPTY
  })
);
  
selectedProductSuppliers$ = combineLatest([
  this.productservice.selectedProduct$,
  this.suppliersList$
    .pipe(
      catchError(err => of([] as Supplier[]))
    )
]).pipe(
  map(([selectedProduct, suppliers]) =>
    suppliers.filter(
      supplier => selectedProduct ? selectedProduct.supplierIds?.includes(supplier.id) : EMPTY
    )
  )
);

  constructor(private http:HttpClient,
    private productservice:ProductsService
    ) { }
}
