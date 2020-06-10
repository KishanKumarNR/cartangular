import {Component, Input, OnInit} from '@angular/core';
import {ProductColor} from '../../services/product.model';

@Component({
  selector: 'spa-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  @Input() colors: ProductColor[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
