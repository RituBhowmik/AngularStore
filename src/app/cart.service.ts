import { Injectable } from '@angular/core';
import { Product } from 'core/product';
import { PRODUCTS } from 'product';
import { BehaviorSubject, observable, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  myCart: any[]=[]
  cartTotal=0;
  obj:any;
  public cartLength$: BehaviorSubject<number> = new BehaviorSubject(0)

  constructor() {

  }

  addToCart(item:string, price:any)
  {
alert("Item added to cart");

this.myCart.push(item);
//this.myCart= this.myCart.map(JSON.parse(item));  newObject = myObject.map(function (value, label) {
 //   return value * value;
  //});
//console.log(this.myCart)

this.cartTotal = this.cartTotal + <number> price;
this.getCart()
this.cartLength$.next(this.myCart.length)
  }

  getCart()
  { console.log(this.myCart);
    return this.myCart;
  }


}
