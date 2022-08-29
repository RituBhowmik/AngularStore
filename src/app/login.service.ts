import { Injectable } from '@angular/core';
import { MatDialog, _closeDialogVia } from '@angular/material/dialog';
import { Subject, BehaviorSubject } from 'rxjs';
import { USERS } from 'Users';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginStatus$: BehaviorSubject<string> = new BehaviorSubject<string>(
    'loading'
  );
  public username$: BehaviorSubject<string> = new BehaviorSubject('');

  myUsers: any;


  public user: any;
  constructor(public localStorageService: LocalStorageService) {
    this.myUsers = USERS;

  }
  check(name: string, password: string): boolean {
    if (!this.user) {
      this.user = this.myUsers.find((obj: any) => {

        return obj.name == name && obj.loginPass == password;
      });

      if (this.user) {
        this.user.loginStatus= 'true';
        this.loginStatus$.next(this.user.loginStatus);
        this.username$.next(this.user.name);

        this.localStorageService.save(this.user.name, this.user.password, this.user.loginStatus );
        this.localStorageService.rememberUser(this.user);

      } else {
        alert('Username does not exist');
      }
    }
    return !!this.user;
  }
  setUsername() {
    console.log(localStorage);
    if (localStorage.length == 0) {
      this.username$.next('');

      this.loginStatus$.next('false');
    } else {

      this.user = JSON.parse(localStorage['user']);
      this.username$.next(this.user.name);
      this.loginStatus$.next(this.user.loginStatus);
      this.user.loginStatus= 'true';
      this.loginStatus$.next('true');
    }
  }
  logout(){
    this.user.loginStatus= 'false';
    this.loginStatus$.next('false');
    this.username$.next('');
    this.user=null;
    localStorage.clear();

  }
}
