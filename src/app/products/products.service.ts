import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, EMPTY, Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';

import { Product } from './models/product';
import { ProductCategoryService } from './product-category.service';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsUrl = 'api/products';

   
  private handleError(err: any): Observable<never> {

    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {

      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
  
productList$= this.http.get<Product[]>(this.productsUrl).pipe(
  tap(product=> console.table(product)),
  catchError(err=>{
    console.log("error occure");
    return EMPTY
  })
);
productwithCategory$=combineLatest([
  this.productList$,this.productCategory.productCtegory$]).pipe( 
  map(([products,categories]) =>products.map(product =>({
   ...product ,
   price:product.price? product.price* 2 : '' ,
 category: categories.find(cat=>  product.categoryId  === cat.id )?.name 

  })as Product))
  );


  private productSelectedSubject = new BehaviorSubject<number>(0);
  productSelectedAction$ = this.productSelectedSubject.asObservable();

  selectedProductChanged(selectedProductId: number): void {
    this.productSelectedSubject.next(selectedProductId);
  }

  constructor(private http:HttpClient,
    private productCategory:ProductCategoryService ) { }
 
 
  
  selectedProduct$ = combineLatest([
    this.productwithCategory$,
    this.productSelectedAction$
  ]).pipe(
    map(([products, selectedProductId]) =>
      products.find(product => product.id === selectedProductId)
    ),
    tap(product => console.log('selectedProduct', product)),
    shareReplay(1)
  );

}