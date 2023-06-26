import {Injectable} from '@angular/core';
import {ApiService} from "../api/api.service";
import {Article} from "@core/interfaces/Article";
import {Observable} from "rxjs";
import {IUserRepository} from "@core/models/IUserRepository";
import {User} from "@core/interfaces/User";

@Injectable({
  providedIn: 'root',
})
export class UserRepositoryService implements IUserRepository {
  constructor(private apiService: ApiService) {
  }

  login(username: string, password: string): Observable<User> {
    return this.apiService.post('users/login', {
      username: username,
      password: password
    });
  }

  addUser(user: User): Observable<Article> {
    return this.apiService.get('users');
  }

  deleteUser(id: number): Observable<void> {
    return this.apiService.delete('users/' + id);
  }

  getUser(id: number): Observable<User> {
    return this.apiService.get('users/' + id);
  }

  getUsers(): Observable<User[]> {
    return this.apiService.get('users');
  }

  updateUser(user: User): Observable<User> {
    return this.apiService.put('users/' + user.id, user);
  }
}
