import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import bootstrap from "bootstrap";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ProductsModule} from "./containers/products/products.module";
import {ProductService} from './services/product.service';
import {CartService} from './services/cart.service';
import {Location, CommonModule} from "@angular/common";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ProductsModule,
    NoopAnimationsModule,
  ],
  providers: [ProductService, CartService, Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
