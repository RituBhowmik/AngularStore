import { Injectable } from '@angular/core';
import { MatDialog, _closeDialogVia } from '@angular/material/dialog';
import { Subject, BehaviorSubject } from 'rxjs';
import { USERS } from 'Users';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { LocalStorageService } from './local-storage.service';

export type loginService$ = {
  username: string;
  state: string;
};
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginStatus$: BehaviorSubject<loginService$> = new BehaviorSubject<loginService$>(
    {
      username: 'username',
      state: 'loading'
  }
  );


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
        this.user.loginStatus= 'loggedIn';
        this.loginStatus$.next({
          username: this.user.name,
          state: this.user.loginStatus,
        });


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


      this.loginStatus$.next( { username:'',
        state:'notLoggedIn'});
    } else {

      this.user = JSON.parse(localStorage['user']);
      this.user.loginStatus= 'loggedIn';
      this.loginStatus$.next({ username:this.user.name,
      state:this.user.loginStatus});
    }
  }
  logout(){
    this.user.loginStatus= 'notLoggedIn';
    this.loginStatus$.next({ username:'',
    state:'notLoggedIn'});

    this.user=null;
    localStorage.clear();

  }
}
