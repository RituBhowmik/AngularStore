import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { LocalStorageService } from '../local-storage.service';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  buyLists: any[] = [];
  empty = true;

  constructor(
    public cartService: CartService,
    public localStorageService: LocalStorageService,
    public loginService: LoginService
  ) {}
  ngOnInit(): void {
    this.buyLists = this.cartService.getCart();
    if (this.loginService.loginStatus$) {
      this.buyLists = this.cartService.myCart;

    }
    if (this.cartService.myCart.length > 0) {
      this.empty = false;
    }
  }
}
