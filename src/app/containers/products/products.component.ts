import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from "../../services/product.model";
import {ProductService} from "../../services/product.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'spa-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public items: Product[] = [];

  constructor(private productsService: ProductService,
              private cartService: CartService,
              private http: HttpClient) {
    productsService.getProducts()
      .subscribe(_ => {
        console.log(_ ,"the product detials")
        this.items = _
      });
    this.cartService
      .getItems()
      .subscribe((items: Product[]) => {
        const allItems = this.items;
        console.log(items ,"the cart product detials")
        this.items = allItems.filter(_ => {
          return !this.itemIsInCart(_, items);
        });
      });
  }

  ngOnInit() {

  }

  private itemIsInCart(item: Product, cart: Product[]): boolean {
    return cart.find(_ => _.id === item.id) != null;
  }
}
