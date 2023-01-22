import { Component, OnChanges, OnInit } from '@angular/core';
import { Colors } from 'core/colors';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(public wishService:WishlistService, public cartService:CartService ) { }

  wishlist: any[]= [];
  products: any[] = [];
  disable: boolean=false;

  ngOnInit(): void {
   this.wishlist=this.wishService.getWishlist();
  }
  //add(obj:any){
    //this.cartService.addToCart(obj, obj.prices, obj.);
    //this.disable=!this.disable;
  //}
}
