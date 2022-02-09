import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, catchError, combineLatest, debounceTime, EMPTY, map, Subject } from 'rxjs';
import { Product } from '../models/product';
import { ProductCategory } from '../models/ProductCategory';
import { ProductCategoryService } from '../product-category.service';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list1',
  templateUrl: './product-list1.component.html',
  styleUrls: ['./product-list1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductList1Component {

  constructor(private productservice: ProductsService,
    private CategoryService: ProductCategoryService) { }

  // private categorySelectedSubject= new Subject<number>();
  // categorySelectedAction$=this.categorySelectedSubject.asObservable();

  private categorySelectedSubject = new BehaviorSubject<number>(0);
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();

  productCtegory$ = this.CategoryService.productCtegory$.pipe(
    catchError(err => {
      console.log('error occure');
      return EMPTY
    })
  )

  // productList$ = this.productservice.productList$.pipe(
  //   catchError(err => {
  //     console.log('error occure');
  //     return EMPTY
  //   })
  //  )

  //  productwithCategory$=this.productservice.productwithCategory$
  productList$ = combineLatest([
    this.productservice.productwithCategory$,
    this.categorySelectedAction$
  ]).pipe(map(([products, selectedCategoryId]) => products.filter(
    product => selectedCategoryId ?
      product.categoryId === selectedCategoryId : true)),
    catchError(err => {
      console.log("error");
      return EMPTY;
    })
  );

  onSelected(categoryId: string): void {
    this.categorySelectedSubject.next(+categoryId);

  }
}
