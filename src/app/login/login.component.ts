import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';  
import { ILogin } from '../shared/userlogin';  

import { FormBuilder, FormGroup, Validators } from '@angular/forms';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  model: ILogin = { username: "TestAdmin", password: "admin@123" }  
  loginForm: FormGroup;  
  message: string;  
  returnUrl: string;  
  constructor(  
    private formBuilder: FormBuilder,  
    private router: Router,  
    private authService: AuthService  
    ) { }  
  
  ngOnInit() {  
    this.loginForm = this.formBuilder.group({  
      username: ['', Validators.required],  
      password: ['', Validators.required]  
    });  
    this.returnUrl = '/layout';  
    this.authService.logout();  
  }  
  
  // convenience getter for easy access to form fields  
  get f() { return this.loginForm.controls; }  
  
  
  login() {  
    
    // stop here if form is invalid  
    if (this.loginForm.invalid) {  
      return;  
    }  
    else {  
      if (this.f.username.value == this.model.username && this.f.password.value == this.model.password) {  
        console.log("Login successful");  
        //this.authService.authLogin(this.model);  
        localStorage.setItem('isLoggedIn', "true");  
        localStorage.setItem('token', this.f.username.value);  
        this.router.navigate([this.returnUrl]);  
      }  
      else {  
        this.message = "Please check your username and password";  
      }  
    }  
  }  
  
}  