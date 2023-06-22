import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { LoginComponent } from '../pages/auth/login/login.component';

const routes : Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : '',
    redirectTo : 'login',
    pathMatch  : 'full'

  }
]

@NgModule({
  declarations : [],
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class AuthRoutesModule {

}
