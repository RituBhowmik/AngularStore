import { Injectable } from '@angular/core';
import { _closeDialogVia } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { USERS } from 'Users';

import { LocalStorageService } from './local-storage.service';
import { CartService } from './cart.service';
import { Router } from '@angular/router';

export type loginService$ = {
  username: string;
  state: string;
  buyLists?: any;
  cartTotal?: number;
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

  constructor(
    public localStorageService: LocalStorageService,
    public cartService: CartService,
    private router:Router
  ) {
    this.myUsers = USERS;
  }
  check(name: string, password: string): boolean {
    if (!this.user) {
      this.user = this.myUsers.find((obj: any) => {
        return obj.name == name && obj.loginPass == password;
      });

      if (this.user) {

        let buyLists = this.user.buyLists;

        if (localStorage['buyLists']) {
          buyLists = localStorage['buyLists'];
        }

        this.loginStatus$.next({
          username: this.user.name,
          state: 'loggedIn',
          buyLists: buyLists,
        });

        this.localStorageService.save(
          this.user.name,
          this.user.password,

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
    //when there is no user logged in before
    if (!localStorage['user']) {
      this.loginStatus$.next({ username: '', state: 'notLoggedIn' });
    }
    //when there is a user who logged in before
    else {
      this.user = JSON.parse(localStorage['user']);


      let tempBuyList: any[] = [];
      //if there were items in cart before
      if (localStorage['buyLists']) {
        tempBuyList = JSON.parse(localStorage['buyLists']);
      }

      this.loginStatus$.next({
        username: this.user.name, // gets displayed in menu bar
        state: 'loggedIn',
        buyLists: tempBuyList,
      });
      // adjusts cart according to user logged
      this.cartService.myCart = tempBuyList;
      this.cartService.cartLength();
      this.cartService.getCart();
    }
  }
  logout() {

    this.loginStatus$.next({ username: '', state: 'notLoggedIn' });

    this.user = null;
    //localStorage.clear();
    const buyLists = localStorage['buyLists'];
    localStorage.clear();
    localStorage['buyLists'] = buyLists;
    this.cartService.orderComplete();
    this.router.navigate(['/']);

  }
  orderComplete() {
    this.user.buyLists = [];
  }
}
