import {CartItem} from "./cart.model";
import {EntityState, EntityStore, StoreConfig} from "@datorama/akita";
import {Injectable} from "@angular/core";
import {Product} from "./product.model";

export interface CartState extends EntityState<CartItem> {}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'cart',
  idKey: 'productId'
})
export class CartStore extends EntityStore<CartState, CartItem> {
  constructor() {
    super({}, { idKey: 'productId' });
  }
  updateQuantity(productId: Product['id'], operand = 1) {
    // @ts-ignore
    this.update(productId, entity => {
      const newQuantity = entity.quantity + operand;
      return {
        ...entity,
        quantity: newQuantity
      };
    });
  }
}
