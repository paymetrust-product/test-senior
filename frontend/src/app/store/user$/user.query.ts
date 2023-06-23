import { UserState } from './user.state';
import { Injectable } from '@angular/core';
@Injectable()
export class UserQuery {

  get User() {
    return new UserState().user;
  }



}
