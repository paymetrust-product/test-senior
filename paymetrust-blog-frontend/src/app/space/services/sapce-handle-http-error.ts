import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export const spaceHandleHttpError = (error: HttpErrorResponse) => {
  if (error.status === 401) {
    // A client-side or network error occurred. Handle it accordingly.
    return throwError(() => 'You are not authorized to do this action');
  }
  else if(error.status === 404) {
    return throwError(() => 'Resource not found');
  }
  else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(() => 'Something bad happened; please try again later.');
}
