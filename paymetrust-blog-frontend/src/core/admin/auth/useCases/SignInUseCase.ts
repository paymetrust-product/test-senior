import { Observable } from "rxjs";
import SignInRepository  from "../repositories/SignInRepository";
import { SignInResponse } from "../entities/SignInResponse";

export default class SignInUseCase {
  constructor(private signInRepository: SignInRepository) { }

  execute(login: string, password: string, stayLogged: boolean): Observable<SignInResponse> {
    return this.signInRepository.execute(login, password, stayLogged)
  }
}
