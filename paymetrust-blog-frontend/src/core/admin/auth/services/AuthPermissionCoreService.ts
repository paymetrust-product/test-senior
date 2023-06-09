import AuthUserLocalStorageSingletonRepository from "../repositories/AuthUserLocalStorageSingletonRepository";


export default class AuthPermissionCoreService{
  private _authUserStorageRepository: AuthUserLocalStorageSingletonRepository;
  constructor (authUserStorageRepository: AuthUserLocalStorageSingletonRepository){
    this._authUserStorageRepository = authUserStorageRepository
  }

  checkAuthenticated(){
    try{
      return this._authUserStorageRepository.haveCurrentUser
    }
    catch{
      return false
    }
  }
}
