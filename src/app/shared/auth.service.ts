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

  constructor(
    private http: HttpClient,
    public router: Router
  ) {
  }

//log-in
  signUp(user: User): Observable<any> {
    let api = `${this.SERVER_URL}`;
    return this.http.post(api, user)
      .pipe(
        catchError(this.handleError)
      )
  }




  // Sign-in
  signIn(user: User) {
    
    return this.http.post<any>(`${this.SERVER_URL}`, user)
      .subscribe((res: any) => {
        console.log('!!!!!!!!!+++',res.id);
        localStorage.setItem('access_token', res.id);
        this.getUserProfile(res.id).subscribe((res) => {
          this.currentUser = res;
          console.log('!!!!!!!!!===',this.currentUser);
          this.router.navigate(['layout']);
        })
      })
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }

  // User profile
  getUserProfile(id): Observable<any> {
    let api = `${this.SERVER_URL}/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}