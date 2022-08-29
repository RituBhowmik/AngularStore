import { Component, OnInit } from '@angular/core';


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PRODUCTS } from 'product';
import { CartService } from 'src/app/cart.service';
import { Product } from 'core/product';



@Component({
  selector: 'app-her',
  templateUrl: './her.component.html',
  styleUrls: ['./her.component.css']
})
export class HerComponent implements OnInit {
  products: any[] = [];
  womens: any[] = [];

//just put the httpClient in the constructor, get this by get config function and then subscribe to it

  constructor(private http:HttpClient, private cartSetvice:CartService ) {}
  configUrl = 'https://mocki.io/v1/788f3455-d7fe-4125-979a-d23846c03d3b';

  getConfig() {
    return this.http.get(this.configUrl);
  }


  ngOnInit(): void {
    this.getConfig().subscribe((data: any) => {
   this.products=data
   this.womens = this.products.filter(product => ((product.id < 30000) &&(product.id > 20000)))
  });
  }

}

