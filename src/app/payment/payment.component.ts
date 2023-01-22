import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class ConfirmPaymentDialog implements OnInit {
  public typePayment = '';

  constructor() { }

  ngOnInit(): void {
  }

}
