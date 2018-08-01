import { Component, OnInit } from '@angular/core';
import { shallowEqual } from '../../../node_modules/@angular/router/src/utils/collection';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  

  getEmail(form){
    console.log(form.email.value);
    console.log(form.fname.value);
    console.log(form.lname.value);
    console.log(form.psw.value);
  }
  
}
