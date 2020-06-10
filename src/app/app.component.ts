import { Component } from '@angular/core';
import {Product} from "./services/product.model";
import {Observable} from "rxjs";
import {CartService} from "./services/cart.service";
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cartangular';
  public shoppingCartItems$: Observable<Product[]>;
  constructor(public location: Location
    , private cartService: CartService) {

    this.shoppingCartItems$ = this
      .cartService
      .getItems();

    this.shoppingCartItems$.subscribe(_ => _);
  }
}
