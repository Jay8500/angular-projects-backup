import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  // { path: '',  loadChildren:() => import('./my-home-component/my-home-component.component').then( (m)=>m.MyHomeComponentComponent)}

    { path : 'product', component : ProductComponent},
    { path : 'productlist/:id', component : ProductListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
