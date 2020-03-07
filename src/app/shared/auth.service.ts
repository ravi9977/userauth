import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  SERVER_URL: string = "http://localhost:3000/users";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor( private http: HttpClient, public router: Router) {}


 logout() :void {    
   localStorage.setItem('isLoggedIn','false');    
   localStorage.removeItem('token');    
   }    
  


}