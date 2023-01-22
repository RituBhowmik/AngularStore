import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { CheckoutComponent } from '../checkout/checkout.component';
import { LocalStorageService } from '../local-storage.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-order-confirmed',
  templateUrl: './order-confirmed.component.html',
  styleUrls: ['./order-confirmed.component.css']
})
export class OrderConfirmedComponent implements OnInit {

  constructor(public cartService: CartService, private router: Router,public localStorageService: LocalStorageService, public loginService:LoginService ) { }
orderDone(){

  this.localStorageService.orderComplete();
  this.loginService.orderComplete();
  this.cartService.orderComplete();
  this.router.navigate(['/']);
}
  ngOnInit(): void {

  }

}
