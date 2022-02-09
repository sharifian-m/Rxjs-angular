
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { catchError, EMPTY, tap } from 'rxjs';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-products-detailes',
  templateUrl: './products-detailes.component.html',
  styleUrls: ['./products-detailes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsDetailesComponent  {
 
  
  selectedProduct$=this.productservice.selectedProduct$.pipe(
    // tap(x=>console.log(x)
    // ),
    catchError(err => {
      console.log('error occure');
      return EMPTY
    })
   );
  constructor(private productservice: ProductsService) { }



}
