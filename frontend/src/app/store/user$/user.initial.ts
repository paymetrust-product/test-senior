import { Injectable } from "@angular/core";
import { StorageService } from "src/app/core/services/storage/Storage.service";
import { UserService } from "src/app/core/services/storage/User.service";
import { defaultUserState } from "./user.state";


@Injectable({providedIn : 'root'})
export class DefaultUser {

  private static INSTANCE :DefaultUser;

  private constructor(private userService : UserService){}

  public static  getInstance() : DefaultUser
  {
    if(DefaultUser.INSTANCE == null) return new DefaultUser(new UserService(new StorageService()));
    return DefaultUser.INSTANCE;
  }

  getUser() {
    return (!!this.userService.user ) ? this.userService.user : defaultUserState();
  }
}
