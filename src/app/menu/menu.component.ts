import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { CartService } from 'src/app/cart.service';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login.service';
import { async, BehaviorSubject } from 'rxjs';
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
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    this.dialogRef = this.dialog.open(LoginComponent);
  }

  ngOnInit(): void {
    //this.loginService.getUsername();
    setTimeout(() => {
      this.loginService.setUsername();
    }, 2000);
  }
}
