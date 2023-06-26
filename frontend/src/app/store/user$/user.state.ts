import { user } from 'src/app/core/interfaces/dto/user.dto';
import { DefaultUser } from './user.initial';

export class UserState {
  user  ?: user =  DefaultUser.getInstance().getUser()
}



export function defaultUserState() : user {
  return {
    token: '',
    user: { firstName: '', lastName: '', email: '', phone: '', password : '', role: { id: ''}
    }
  };
}




