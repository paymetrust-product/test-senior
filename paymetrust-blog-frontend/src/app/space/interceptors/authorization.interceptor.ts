import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserLocalStorageService } from 'src/app/services/auth-user-local-storage/auth-user-local-storage.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(private authUserLocalStorageService: AuthUserLocalStorageService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let token =""
    // Get the auth token from the service.
    if(this.authUserLocalStorageService.authUserLocalStorageSingletonService.haveCurrentUser){
      token = this.authUserLocalStorageService.authUserLocalStorageSingletonService.currentUserAuthenticated.token
    }
    else{
      //this.router.navigate(["/auth", "login"])
    }

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
