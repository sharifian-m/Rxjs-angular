import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './home/welcome/welcome.component';


const routes: Routes = [
//  { path: 'welcome', component: WelcomeComponent },
 { path: '', redirectTo: 'products', pathMatch: 'full' },
 {path: 'products',
 loadChildren: () =>
   import('./products/products.module').then(m => m.ProductsModule)
},

{path: 'AboutUs',
loadChildren: () =>
  import('./about-us/about-us.module').then(m => m.AboutUsModule)
},
//  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
