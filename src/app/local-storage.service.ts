import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public name = '';
  public password = '';

  public buyLists: any[] = [];


  constructor() {}
  save(
    name: string,
    password: string,

    buyLists: any[]
  ): void {
    localStorage['user'] = name;
    localStorage['password'] = password;

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
  orderComplete()
  { //const order:any[]= [];
    //order.push(this.buyLists);
    //localStorage['orders']= JSON.stringify(order)

    localStorage['buyLists'] = '';
  }
}
