import AuthUserLocalStorageSingletonRepository from "../repositories/AuthUserLocalStorageSingletonRepository";

export type DisconnectCallback = ()=>void;

export default class DisconectUserUseCase {
  constructor (private AuthUserLocalStorageSingletonRepository: AuthUserLocalStorageSingletonRepository){}
  execute(logoutCallback?: DisconnectCallback) {
    try{
      this.AuthUserLocalStorageSingletonRepository.remove()
      if(logoutCallback){
        logoutCallback()
      }
    }
    catch{
      throw new Error("Fail to disconnect user")
    }
  }
}
