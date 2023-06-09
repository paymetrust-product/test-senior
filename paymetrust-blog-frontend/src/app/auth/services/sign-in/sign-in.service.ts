import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import SignInRepository from 'src/core/admin/auth/repositories/SignInRepository';
import { environment } from 'src/environments/environment';
import UserAuthenticated from 'src/core/admin/auth/entities/UserAuthenticated';
import { AuthUserLocalStorageService } from 'src/app/services/auth-user-local-storage/auth-user-local-storage.service';
import { SignInResponse } from 'src/core/admin/auth/entities/SignInResponse';

@Injectable({
  providedIn: 'root'
})
export class SignInService implements SignInRepository {
  private apiBaseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient, private authUserLocalStorageService: AuthUserLocalStorageService) { }

  execute(username: string, password: string, stayLogged: boolean): Observable<SignInResponse> {
    const bodyRequest = { username, password }

    return this.http.post<SignInResponse>(`${this.apiBaseUrl}/auth/signin`, bodyRequest).pipe(
      catchError(this.handleError),
      tap((signInResponse) => {
        this.authUserLocalStorageService.authUserLocalStorageSingletonService.save(new UserAuthenticated(signInResponse.profile, signInResponse.token, signInResponse.expiresIn))
      }),
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 401) {
      // A client-side or network error occurred. Handle it accordingly.
      return throwError(() => 'Bad credentials username or password incorrect');
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => 'Something bad happened; please try again later.');
  }
}
