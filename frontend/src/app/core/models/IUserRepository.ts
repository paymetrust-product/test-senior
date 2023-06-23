import {User} from "../interfaces/User";
import {Observable} from "rxjs";

export interface IUserRepository {
  getUsers(): Observable<User[]>;

  getUser(id: number): Observable<User>;

  login(username: string, password: string): Observable<User>;

  addUser(user: User): Observable<User>;

  updateUser(user: User): Observable<User>;

  deleteUser(id: number): Observable<void>;
}
