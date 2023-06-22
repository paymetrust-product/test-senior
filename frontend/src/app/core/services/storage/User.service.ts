import { Injectable } from '@angular/core';
import { StorageService } from './Storage.service';
import { user, userDto } from '../../interfaces/dto/user.dto';
import { environment } from 'src/environment/env.prod';


@Injectable({
  providedIn : 'root'
})
export class UserService {

  private currentUser !: user;

  constructor(private storageService : StorageService){
    const [user, token] = [
      JSON.parse(this.storageService.get(environment.STORAGE_USER_KEY) as string),
      this.storageService.get(environment.STORAGE_USER_TOKEN) as string
    ]
    this.currentUser = {user,token}
  }

  get user() : user{
    return this.currentUser as user;
  }


}
