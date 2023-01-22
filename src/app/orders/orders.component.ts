import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(public localStorageService: LocalStorageService, public loginService: LoginService) { }

  ngOnInit(): void {
  }

}
