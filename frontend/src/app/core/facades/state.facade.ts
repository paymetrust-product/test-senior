import { UserStore } from './../../store/user$/user.store';
import { Injectable } from '@angular/core';
import { AppFacade } from './app.facade';
import { environment } from 'src/environment/env.prod';
import { user } from '../interfaces/dto/user.dto';
import { UserQuery } from 'src/app/store/user$/user.query';


@Injectable({
  providedIn: 'root',
})
export class StatesFacades {
  constructor(
    private userQuery: UserQuery,
    private appFacades : AppFacade,
    private userStore  : UserStore

  ) {}


  get User() {
    return  this.userQuery.User;
  }

  isConnected() {
    return !!this.User?.token && !!this.User?.user;
  }

  private updateUser(user: user) {
    return this.userStore.addUserState(user);
  }

  logout() {
    this.appFacades.deleteStorage(environment.STORAGE_USER_TOKEN);
    this.appFacades.deleteStorage(environment.STORAGE_USER_KEY);
    return this.userStore.removeUserState();
  }

  dispatchUser(user : user) {
    this.appFacades.setStorage({key : environment.STORAGE_USER_TOKEN,value : user.token});
    this.appFacades.setStorage({key : environment.STORAGE_USER_KEY, value : JSON.stringify(user.user)});
    return this.updateUser(user);
  }


}
