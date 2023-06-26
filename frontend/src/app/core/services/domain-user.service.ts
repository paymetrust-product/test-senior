import {Inject, Injectable, InjectionToken} from '@angular/core';
import {User} from "../interfaces/User";
import {Observable} from "rxjs";
import {IUserRepository} from "@core/models/IUserRepository";

export const USER_REPOSITORY_TOKEN = new InjectionToken<IUserRepository>('UserRepository');

@Injectable({
  providedIn: 'root'
})
export class DomainUserService {

  constructor(@Inject(USER_REPOSITORY_TOKEN) private userRepository: IUserRepository) {
  }

  getUsers(): Observable<User[]> {
    return this.userRepository.getUsers();
  }

  getUser(id: number): Observable<User> {
    return this.userRepository.getUser(id);
  }

  createUser(category: User): Observable<User> {
    return this.userRepository.addUser(category);
  }

  updateUser(category: User): Observable<User> {
    return this.userRepository.updateUser(category);
  }

  deleteUser(id: number): Observable<void> {
    return this.userRepository.deleteUser(id);
  }
}
