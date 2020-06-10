import {Injectable} from "@angular/core";
import {CartItem} from "./cart.model";
import {QueryEntity} from "@datorama/akita";
import {CartState, CartStore} from "./cart.store";
import {ProductsQuery} from "./product.query";
import {combineLatest} from "rxjs";
import {map, publishReplay, refCount} from "rxjs/operators";

// @ts-ignore
@Injectable({
  providedIn: 'root'
})

interface State {

}

export class CartQuery extends QueryEntity<State, CartItem> {
  constructor(protected store: CartStore,
              private productsQuery: ProductsQuery) {
    super(store);
  }

  selectItems$ = combineLatest(
    this.selectAll(),
    this.productsQuery.selectAll({ asObject: true })
  ).pipe(
    map(joinItems),
    publishReplay(),
    refCount()
  );

  selectTotal$ = this.selectItems$.pipe(
    map((items: any) => items.reduce((acc, item) => acc + item.total, 0)
    ));
}

function joinItems([cartItems, products]) {
  return cartItems.map(cartItem => {
    const product = products[cartItem.productId];
    return {
      ...cartItem,
      ...product,
      total: cartItem.quantity * product.price
    };
  });
}
