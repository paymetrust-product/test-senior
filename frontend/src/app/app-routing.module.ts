import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'guest',
    loadChildren  : ()=> import("./modules/guest.module").then((m)=>m.GuestModule)
  },
  {
    path : 'admin',
    loadChildren : ()=> import("./modules/admin.module").then((m)=> m.AdminModule)
  },
  {
    path : 'auth',
    loadChildren : ()=> import("./modules/auth.module").then((m)=>m.AuthModule)
  },
  {
    path       : '',
    redirectTo : 'guest',
    pathMatch  : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
