import { Injectable } from '@angular/core';
import { MatLegacyDialog as MatDialog, _closeLegacyDialogVia as _closeDialogVia } from '@angular/material/legacy-dialog';
import { Subject, BehaviorSubject } from 'rxjs';
import { USERS } from 'Users';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { LocalStorageService } from './local-storage.service';
import { CartService } from './cart.service';

export type loginService$ = {
  username: string;
  state: string;
  buyLists?: any;
  cartTotal?: number;
  orders?: any[];
};
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginStatus$: BehaviorSubject<loginService$> =
    new BehaviorSubject<loginService$>({
      username: 'username',
      state: 'loading',
    });

  myUsers: any;

  public user: any;
  static User: any;
  constructor(public localStorageService: LocalStorageService,
    public cartService: CartService) {
    this.myUsers = USERS;
  }
  check(name: string, password: string): boolean {
    if (!this.user) {
      this.user = this.myUsers.find((obj: any) => {
        return obj.name == name && obj.loginPass == password;
      });

      if (this.user) {
        this.user.loginStatus = 'loggedIn';
        let buyLists = this.user.buyLists;
        let orders= this.user.orders;
        if (localStorage['buyLists']) {
          buyLists = localStorage['buyLists'];
        }
        if (localStorage['orders']){
          orders = localStorage['orders'];
        }

        this.loginStatus$.next({
          username: this.user.name,
          state: this.user.loginStatus,
          buyLists: buyLists,
          orders: orders,
        });

        this.localStorageService.save(
          this.user.name,
          this.user.password,
          this.user.loginStatus,
          buyLists
        );
        this.localStorageService.rememberUser(this.user);
      } else {
        alert('Username does not exist');
      }
    }
    return !!this.user;
  }
  setUsername() {
    if (!localStorage['user']) {
      this.loginStatus$.next({ username: '', state: 'notLoggedIn' });
    } else {
      this.user = JSON.parse(localStorage['user']);
      this.user.loginStatus = 'loggedIn';
      const buylists = JSON.parse(localStorage['buyLists']);
      const orders = JSON.parse(localStorage['orders']);
      this.loginStatus$.next({
        username: this.user.name,
        state: 'loggedIn',
        buyLists: buylists,
        orders: orders,
      }
      );
      this.cartService.myCart = buylists;
      this.cartService.cartLength$.next(buylists.length);
      this.cartService.getCart();

    }
  }
  logout() {
    this.user.loginStatus = 'notLoggedIn';
    this.loginStatus$.next({ username: '', state: 'notLoggedIn' });

    this.user = null;
    //localStorage.clear();
    const buyLists = localStorage['buyLists']
    localStorage.clear();
    localStorage['buyLists'] = buyLists;
  }
  orderComplete(){
    this.user.order= localStorage['orders'];
    this.user.buyLists= [];
  }
}
