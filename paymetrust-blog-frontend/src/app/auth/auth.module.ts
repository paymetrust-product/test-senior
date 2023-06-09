import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,

    NgbModule,
    FormsModule
  ]
})
export class AuthModule { }
