import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './products.component';
import {ProductDetailsComponent} from '../../components/product-details/product-details.component';
import {ShoppingCartComponent} from '../../components/shopping-cart/shopping-cart.component';
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'details/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'cart',
    component: ShoppingCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
