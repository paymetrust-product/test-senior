import { NgModule } from '@angular/core';
import { AuthRoutesModule } from '../routes/auth.routes';
import { LoginComponent } from '../pages/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceModule } from './service.module';

@NgModule({
  imports : [FormsModule,ReactiveFormsModule,AuthRoutesModule,ServiceModule],
  declarations: [
    LoginComponent
  ]
})
export class AuthModule {

}
