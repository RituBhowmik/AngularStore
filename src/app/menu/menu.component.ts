import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from 'src/app/cart.service';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  dialogRef: any;

  constructor(
    public loginService: LoginService,
    public CartService: CartService,
    public dialog: MatDialog,
    private router:Router
  ) {}

  roots = [
    { name: 'All items', link: '/product-list' },
    {
      name: 'Categories',
      link: '',
      children: [
        { name: 'His Fashion', link: '../his' },
        { name: 'Her Fashion', link: '../her' },
        { name: 'Kids fashion', link: '../kids' },
        { name: 'Home items', link: '../homeStore' },
      ],
    },
    { name: 'Shopping Cart', link: '../cart' },

    { name: 'Home Page', link: '' },
  ];
  openDialog(): void {
    this.dialogRef = this.dialog.open(LoginComponent);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loginService.setUsername();
    }, 2000);
  }

}
