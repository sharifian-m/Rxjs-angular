import { ChangeDetectionStrategy, Component } from '@angular/core';
import { catchError, EMPTY, map, tap } from 'rxjs';
import { combineLatest, combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  constructor(private productservice: ProductsService) { }

  productList$ = this.productservice.productwithCategory$.pipe(
    catchError(err => {
      console.log('error occure');
      return EMPTY
    })
   )
   selectedProduct$ = this.productservice.selectedProduct$;
 
   onselected(id:number){
this.productservice.selectedProductChanged(id);
   }


}
