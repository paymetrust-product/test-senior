import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {  } from '@angular/forms';
import { Router } from '@angular/router';
import { AppFacade } from 'src/app/core/facades/app.facade';
import { loginDto, user } from 'src/app/core/interfaces/dto/user.dto';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';
import { StatesFacades } from 'src/app/core/facades/state.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers : []
})
export class LoginComponent {

  utils     = inject(UtilsFacades);
  appFacade = inject(AppFacade);
  router    = inject(Router);
  state     = inject(StatesFacades);


  loaded : boolean = false;

  login : loginDto = {
    email : "",
    password : ""
  }


  SignIn() {
   const verif = this.Verification();
   if(!verif) return this.utils.errorToastMessage("Kindly fill all requested fields");
   if(!this.utils.testEmail(this.login.email)) return this.utils.errorToastMessage("Kindly put a valid email address");
   return this.callToServer();
  }

  callToServer() {
    this.loaded = true;
    this.appFacade.login(this.login).subscribe( {
      next :  (response: any)=>{
        this.loaded = false;
        this.state.dispatchUser(response.returnObject as user)
        this.utils.successToastMessage("Your are connected");
        this.router.navigate(["/"]);
        return ;
      },
      error : (err)=>{
        this.loaded = false;
        if(!!err.error?.code){
          this.utils.errorToastMessage(err.error.message);
          return;
        }

        this.utils.errorToastMessage(err.message);

      }
    }
   )
  }

  Verification() {
   return !!this.login.email  && !! this.login.password
  }

}
