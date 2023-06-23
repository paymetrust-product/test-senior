import { Injectable } from "@angular/core";
import { UserState, defaultUserState } from "./user.state";
import { Store } from "../store";
import { user } from "src/app/core/interfaces/dto/user.dto";

@Injectable({providedIn: 'root'})
export class UserStore extends Store<UserState> {
    constructor(){
      super(new UserState())
    }

    addUserState(user : user): void {
      this.setState({
        ...this.state,
        user
      });
      console.log(this.state.user?.user)
    }

    removeUserState(): void {
      this.setState({
       user  : defaultUserState()

      });
    }
}
