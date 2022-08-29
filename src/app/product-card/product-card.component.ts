import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {


 @Input() product: any;


 constructor(private cartSetvice:CartService, public wishlistService:WishlistService ,private route: ActivatedRoute, private router: Router) {

 }

 addWishlist(){
  this.wishlistService.addToWishlist(this.product);
 }
  add(): void{
    this.cartSetvice.addToCart(this.product, this.product.price);
      }


  ngOnInit(): void {

  }
}




