import { Injectable } from '@angular/core';
import { USERS } from 'Users';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
public name= '';
public password= '';
public loginStatus= '';


  constructor() {  }
  save(name: string, password: string, loginStatus: boolean): void
  {
    localStorage['name'] =name;
    localStorage['password'] =password;
    localStorage['loginStatus'] =loginStatus;
  }
  rememberUser(user:any)
  {
  localStorage['user']= JSON.stringify(user);

  }

}
