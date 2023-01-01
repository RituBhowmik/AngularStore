import { Injectable } from '@angular/core';
import { USERS } from 'Users';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public name = '';
  public password = '';
  public loginStatus = '';
  public buyLists: any[] = [];

  constructor() {}
  save(
    name: string,
    password: string,
    loginStatus: boolean,
    buyLists: any[]
  ): void {
    localStorage['user'] = name;
    localStorage['password'] = password;
    localStorage['loginStatus'] = loginStatus;
    localStorage['buyLists'] = buyLists;
  }
  rememberUser(user: any) {
    localStorage['name'] = JSON.stringify(user.username);
    localStorage['user'] = JSON.stringify(user);
    if (!localStorage['buyLists'] ) {
      localStorage['buyLists']  = this.buyLists;
    }
  }
  rememberList(items: any[]) {
    if (!items) {
      this.buyLists = [];
    } else {
      this.buyLists = items;
      localStorage['buyLists'] = JSON.stringify(this.buyLists);
    }
  }

  logout() {
    const buyLists = localStorage['buyLists']
    localStorage.clear();
    localStorage['buyLists'] = buyLists;
  }

  get getBuylists() {
    return localStorage['buyLists'][localStorage['user'].name]
  }
}
