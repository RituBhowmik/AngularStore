import { Component, OnInit } from '@angular/core';


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PRODUCTS } from 'product';
import { CartService } from 'src/app/cart.service';
import { Product } from 'core/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  buyLists: any[]=[];
  products: any[] = [];
  empty=true;


  constructor(public cartService:CartService ) {
  }
  ngOnInit(): void {
   this.buyLists=this.cartService.getCart();
   if(this.buyLists.length>1){this.empty=false;}

  }

}

