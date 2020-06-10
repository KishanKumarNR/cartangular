import { Injectable } from '@angular/core';

import {Observable, of} from "rxjs";
import {Product} from "./product.model";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public getProducts(): Observable<Product[]> {
    return this.products();
  }

  public getProduct(id: number): Observable<Product> {
    return this
      .products()
      .pipe(map(_ => {
        return _.find((item: Product) => {
          return item.id === id;
        })
      }))
  }

  private products(): Observable<Product[]> {
    return of(<Product[]>[
      <Product>{id: 1, name: 'Blue item', price: 123.09, colors: ['blue'], "picture": "https: //encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"},
      <Product>{id: 2, name: 'Green and gray', price: 99.09, colors: ['green', 'gray']},
      <Product>{id: 3, name: 'Green item', price: 99.09, colors: ['green']},
      <Product>{id: 4, name: 'Blue and gray', price: 99.09, colors: ['blue', 'gray']},
      <Product>{id: 5, name: 'Green and blue', price: 99.09, colors: ['green', 'blue']},
      <Product>{id: 6, name: 'Green and blue', price: 99.09, colors: ['green', 'blue']},
      <Product>{id: 7, name: 'Gray', price: 99.09, colors: ['gray']},
      <Product>{id: 8, name: 'Blue', price: 99.09, colors: ['blue']},
      <Product>{id: 9, name: 'All colors', price: 99.09, colors: ['gray', 'blue', 'green']},
    ]);
  }

}
