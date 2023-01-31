import { Component, Input, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { PRODUCTS } from 'product';
import { Colors } from 'core/colors';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],

})

export class ProductDetailsComponent implements OnInit {
  id: any;
  item: any;
  products: any[] = [];
  activeColor: Colors ={
    name: 'black',
    color: 'black'
  };


  constructor(private cartService:CartService,private router: ActivatedRoute, private route: Router) {
    this.id = this.router.snapshot.params['id'];

  }
  ngOnInit(): void {
    this.products = PRODUCTS;
    this.item = this.products.find((obj) => {
      return obj.id == this.id;
    });

  }
  changeColor(color:Colors){
this.activeColor=color;

  }
  add(): void{
    if(this.activeColor?.name== 'black')
    {alert('Please select the color')}
    else{
    this.cartService.addToCart(this.item, this.activeColor);
   this.route.navigate(['/cart'])
    }
      }

}
