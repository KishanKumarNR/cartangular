import { Product } from './product.model';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from "@angular/core";

export interface ProductsState extends EntityState<Product> {}

// @ts-ignore
@Injectable({
  providedIn: 'root'
})

@StoreConfig({
  name: 'products'
})
export class ProductsStore extends EntityStore<ProductsState, Product> {
  constructor() {
    super();
  }
}
