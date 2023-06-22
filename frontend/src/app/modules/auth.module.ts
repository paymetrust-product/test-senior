import { NgModule } from '@angular/core';
import { AuthRoutesModule } from '../routes/auth.routes';
import { LoginComponent } from '../pages/auth/login/login.component';

@NgModule({
  imports : [AuthRoutesModule],
  declarations: [
    LoginComponent
  ]
})
export class AuthModule {

}
