import { Injectable } from '@angular/core';

import {Observable, of} from "rxjs";
import {Product} from "./product.model";
import {map} from "rxjs/operators";

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
      <Product>{id: 1, name: 'item1', price: 123.09,
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU" },
      <Product>{id: 2, name: 'Green and gray shades', price: 99.09,
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"},
      <Product>{id: 3, name: 'trapezium', price: 99.19,
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"},
      <Product>{id: 4, name: 'jelly glass', price: 199.00,
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"},
      <Product>{id: 5, name: 'cards', price: 299.90,
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"},
      <Product>{id: 6, name: 'water knot', price: 60.83,
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"}
    ]);
  }

}
