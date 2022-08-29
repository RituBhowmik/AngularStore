import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css'],
})
export class KidsComponent implements OnInit {
  products: any[] = [];
  kids: any[] = [];

  //just put the httpClient in the constructor, get this by get config function and then subscribe to it

  constructor(private http: HttpClient, private cartSetvice: CartService) {}
  configUrl = 'https://mocki.io/v1/788f3455-d7fe-4125-979a-d23846c03d3b';

  getConfig() {
    return this.http.get(this.configUrl);
  }

  ngOnInit(): void {
    this.getConfig().subscribe((data: any) => {
      this.products = data;
      this.kids = this.products.filter(
        (product) => product.id < 40000 && product.id > 30000
      );
    });
  }
}
