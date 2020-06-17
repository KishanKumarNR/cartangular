import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../services/product.model";
import { Router } from '@angular/router';
import {showWarningOnce} from "tslint/lib/error";

@Component({
  selector: 'spa-product',
  templateUrl: './product.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit  {
  public showAddBtn: boolean = true;

  @Input() public id: number;
  @Input() public name: string;
  @Input() public price: number;
  @Input() public currency: string;
  @Input() public size: number;
  @Input() public picture: string;
  dynamicText: string = "https://previews.123rf.com/images/gigisomplak/gigisomplak1709/gigisomplak170900091/89576832-logo-blue-fast-moving-shopping-cart-at-transparent-effect-background.jpg";

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.showAddBtn = !this.router.url.includes("details");
  }

  public getCurrency(): string {
    return ' ';
  }

}
