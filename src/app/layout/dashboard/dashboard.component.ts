import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute,
    private router: Router,) {}
  


  Username: string;  
  
 
  ngOnInit() {  
    this.Username = localStorage.getItem('token');  
    //console.log(this.id);  
  }  
  
  logout() {  
    console.log('logout');  
    this.authService.logout();  
    this.router.navigate(['/login']);  
  }  
  
}  

