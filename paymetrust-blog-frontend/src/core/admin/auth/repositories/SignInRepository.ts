import { Observable } from "rxjs";
import { SignInResponse } from "../entities/SignInResponse";

export default interface SignInRepository {
  execute(username: string, password: string, stayLogged: boolean): Observable<SignInResponse>
}


