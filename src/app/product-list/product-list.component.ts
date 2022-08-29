import { Component, OnInit } from '@angular/core';



import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PRODUCTS } from 'product';
import { CartService } from 'src/app/cart.service';
import { Product } from 'core/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any[]=[];
  constructor(private http:HttpClient, private cartSetvice:CartService ) {}
  configUrl = 'https://mocki.io/v1/788f3455-d7fe-4125-979a-d23846c03d3b';

  getConfig() {
    return this.http.get(this.configUrl);
  }


  ngOnInit(): void {
    this.getConfig().subscribe((data: any) => {
   this.products=data;
  });
  }

}



