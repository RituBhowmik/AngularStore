import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() { }
  myWishlist: any[]=[];
  public wishLength$: BehaviorSubject<number> = new BehaviorSubject(0)

  addToWishlist(item:string)
  {
alert("Item added to wishlist");

this.myWishlist.push(item);
this.wishLength$.next(this.myWishlist.length)
//this.myCart= this.myCart.map(JSON.parse(item));  newObject = myObject.map(function (value, label) {
 //   return value * value;
  //});
//console.log(this.myCart)

  }
  getWishlist()
  {
    return this.myWishlist;
  }
}
