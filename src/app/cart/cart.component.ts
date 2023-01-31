import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PRODUCTS } from 'product';
import { CartService } from 'src/app/cart.service';
import { Product } from 'core/product';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ThemePalette } from '@angular/material/core';
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
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 25;
  bufferValue = 75;

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
