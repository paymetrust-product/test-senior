import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import SignInViewModel from 'src/core/admin/auth/viewModel/SignInViewModel';
import { SignInService } from '../services/sign-in/sign-in.service';
import SignInCredentials from 'src/core/admin/auth/entities/SignInCredentials';
import { Router } from '@angular/router';

interface Alert {
	type: string;
	message: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  @ViewChild("signInForm")  signInForm!: NgForm;

  signInViewModel: SignInViewModel;
  credentials = new SignInCredentials("", "")

  constructor(private signInService: SignInService, private router: Router){
    this.signInViewModel = new SignInViewModel(signInService)
  }

  submit(){
    if(this.signInForm?.valid){
      this.signInViewModel.submit(this.credentials.username, this.credentials.password).subscribe({
        next: (value)=> {
          this.router.navigate(["space"])
        }
      })
    }
  }

  closeError(){
    this.signInViewModel.removeError()
  }
}
