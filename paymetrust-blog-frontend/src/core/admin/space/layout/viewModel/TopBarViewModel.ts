import AuthUserLocalStorageSingletonRepository from "src/core/admin/auth/repositories/AuthUserLocalStorageSingletonRepository";
import DisconectUserUseCase, { DisconnectCallback } from "src/core/admin/auth/useCases/DisconnectUserUseCase";

export default class TopBarViewModel{
  constructor(private authUserLocalStorageSingletonRepository: AuthUserLocalStorageSingletonRepository){}

  disconnect(disconnectCallBack: DisconnectCallback){
    try{
      new DisconectUserUseCase(this.authUserLocalStorageSingletonRepository).execute(disconnectCallBack)
    }
    catch{
      throw new Error('Disconnection Failed')
    }
  }

  getUserName(){
    if(this.authUserLocalStorageSingletonRepository.haveCurrentUser){
      const currentUserAuthenticated = this.authUserLocalStorageSingletonRepository.currentUserAuthenticated;
      return `${currentUserAuthenticated.profile.username} (${currentUserAuthenticated.profile.role.label})`
    }
    return ""
  }
}
