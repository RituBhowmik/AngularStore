import { Injectable } from '@angular/core';
import { Product } from 'core/product';
import { PRODUCTS } from 'product';
import { BehaviorSubject, observable, Observable, Subject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  myCart: any[] = [];
  obj: any;
  public cartLength$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(public localStorageService: LocalStorageService,
 ) {}

  get cartTotal() {
    let total = 0;
    this.myCart.forEach((x) => {
      total += x.price;
    });

    return total;
  }

  addToCart(item: string, price: any) {

    alert('Item added to cart');

    this.myCart.push(item);

    //this.myCart= this.myCart.map(JSON.parse(item));  newObject = myObject.map(function (value, label) {
    //   return value * value;
    //});
    //console.log(this.myCart)


    this.localStorageService.rememberList(this.myCart);
    //this.getCart();
    this.cartLength$.next(this.myCart.length);

  }

  getCart() {

    return this.myCart;
  }
}
