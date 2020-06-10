import { ProductsStore } from './product.store';
import { Product } from './product.model';
import { QueryEntity } from '@datorama/akita';
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

// @ts-ignore
@Injectable({
  providedIn: 'root'
})

interface ProductsState {

}

export class ProductsQuery extends QueryEntity<ProductsState> {
  isPristine: Observable<Product[]>;
  constructor(protected store: ProductsStore) {
    super(store);
  }

  getProducts(value: string) {
    console.log(this)
    return this.selectAll({
      filterBy: (entity: any) => entity.title.toLowerCase().includes(value)
    });
  }
}
