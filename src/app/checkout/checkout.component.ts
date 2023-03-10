import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmPaymentDialog } from '../payment/payment.component';
import { Router } from '@angular/router';

type PaymentType= 'cash' | 'card' | 'redeem'
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})

export class CheckoutComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({});
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(
    private _formBuilder: UntypedFormBuilder,
    public cartService: CartService,
    public dialog: MatDialog,
    private router: Router
  ) {}
  name = '';
  address = '';

  payments: { name: PaymentType; icon: string }[] = [
    { name: 'cash', icon: 'account_balance_wallet' },
    { name: 'card', icon: 'payment' },
    { name: 'redeem', icon: 'redeem' },
  ];

  ngOnInit(): void {}

  openDialog(typePayment: PaymentType) {
    const dialogRef = this.dialog.open(ConfirmPaymentDialog);
    dialogRef.componentInstance.typePayment = typePayment;
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        alert('Your order is confirmed');

        this.router.navigate(['/orderConfirmed']);
      } else {
        alert('Your payment was not successful');
      }
    });
  }
}
