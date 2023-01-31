import { outputAst, ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

import { USERS } from 'Users';
import { LocalStorageService } from '../local-storage.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {


  formData = { name: '', loginPass: ''};
public status:boolean | undefined;


  constructor(public loginService: LoginService,
    public localStorageService: LocalStorageService,
    public dialogRef: MatDialogRef<LoginComponent>) {


  }
  checkLog(){
    this.status= this.loginService.check(this.formData.name, this.formData.loginPass);
    if(this.status)
    {
    //this.localStorageService.save(this.formData.name, this.formData.loginPass );

    this.dialogRef.close();
    }
    else
    {
      this.formData = { name: '', loginPass: ''};
    }
  }
  logout(){
    this.loginService.logout();
  }
  ngOnInit(): void {

    if(localStorage['user'])
    {
      //this.loginService.setUsername();
      this.formData.name=this.localStorageService.name;
      this.formData.loginPass=this.localStorageService.password;
    }
}

}

