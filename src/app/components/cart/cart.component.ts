import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CartItem} from "../../services/cart.model";
import {Product} from "../../services/product.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items$: Observable<(CartItem & Product)[]>;
  total$: Observable<number>;

  constructor() {}

  ngOnInit() {

  }

  remove({ productId }: CartItem) {

  }
}
