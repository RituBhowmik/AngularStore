import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {


 @Input() product: any;


 constructor(
   public cartSetvice:CartService, private route: ActivatedRoute, private router: Router) {

 }




  ngOnInit(): void {

  }
}




