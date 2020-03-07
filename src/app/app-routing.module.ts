import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./shared/auth.guard";


const routes: Routes = [
{ path: '', redirectTo: '/login', pathMatch: 'full' },

{
 path: 'login',
 loadChildren: './login/login.module#LoginModule',
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
