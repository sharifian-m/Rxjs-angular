import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, tap } from 'rxjs';
import { ProductCategory } from './models/ProductCategory';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  private productCtegoryUrl='/api/productCategories';

  productCtegory$=this.http.get<ProductCategory[]>(this.productCtegoryUrl).pipe(
    tap(product=>console.log(product)),
    catchError(err=>{
      console.log("error occure");
      return EMPTY
    })
  );

  constructor(private http:HttpClient) { }

 
}
