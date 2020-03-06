import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./shared/auth.guard";




const routes: Routes = [
{ path: '', redirectTo: '/signup', pathMatch: 'full' },

{
 path: 'login',
 loadChildren: './login/login.module#LoginModule',
 },
 {
 path: 'signup',
 loadChildren: './signup/signup.module#SignupModule',
 },
 
{
 path: 'layout',
 loadChildren: './layout/layout.module#LayoutModule',canActivate: [AuthGuard]


},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
