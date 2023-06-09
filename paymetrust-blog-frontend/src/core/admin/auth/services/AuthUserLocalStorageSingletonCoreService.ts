import { SignInResponse } from "../entities/SignInResponse";
import UserAuthenticated from "../entities/UserAuthenticated";
import AuthUserLocalStorageSingletonRepository from "../repositories/AuthUserLocalStorageSingletonRepository";


export default class AuthUserLocalStorageSingletonCoreService implements AuthUserLocalStorageSingletonRepository {
  private static instance: AuthUserLocalStorageSingletonCoreService;
  private _localStorageItemName = 'auth';
  private _emptyUserAuthenticated: UserAuthenticated = new UserAuthenticated(
    {
      username: "",
      role: {
        id: 0,
        label: "",
        permissions: [],
        createdBy: {id: 0, username: ""},
        createdAt: ""
      }
    },
    "",
    0
  );
  private _currentUserAuthenticated: UserAuthenticated = this._emptyUserAuthenticated;
  private _haveCurrentUser = false;
  private _syncronizedCurrentUser = false;

  private constructor() { }

  static getInstance() {
    if (!AuthUserLocalStorageSingletonCoreService.instance) {
      AuthUserLocalStorageSingletonCoreService.instance = new AuthUserLocalStorageSingletonCoreService()
    }
    return AuthUserLocalStorageSingletonCoreService.instance
  }

  save(userAuthenticated: UserAuthenticated) {
    try {
      this.saveWithoutSyncCurrentUser(userAuthenticated)

      this.defineCurrentUser(this.defineUserAuthenticated(userAuthenticated))
      return this.currentUserAuthenticated
    }
    catch {
      throw new Error("Fail to save authentication datas to loacalstorage or init it")
    }
  }

  saveWithoutSyncCurrentUser(userAuthenticated: UserAuthenticated) {
    try {
      localStorage.setItem(this._localStorageItemName, JSON.stringify(userAuthenticated))
    }
    catch {
      throw new Error("Fail to save authentication datas to localstorage")
    }
  }

  get() {
    try {
      if (this._syncronizedCurrentUser) {
        return this._currentUserAuthenticated
      }
      const gettingUser = this.getWithoutSyncCurrentUser()
      this.defineCurrentUser(gettingUser)
      return gettingUser
    }
    catch {
      throw new Error("Fail to get authentication datas from localstorage or init it")
    }
  }

  getWithoutSyncCurrentUser() {
    const standardError = new Error("Fail to get authentication datas from localstorage")
    try {
      const localStorageResponse = localStorage.getItem(this._localStorageItemName)
      if (localStorageResponse) {
        const localStorageJsonResponse = JSON.parse(localStorageResponse) as UserAuthenticated
        if (localStorageJsonResponse) {
          return this.defineUserAuthenticated(localStorageJsonResponse)
        }
        throw standardError
      }
      throw standardError
    }
    catch {
      throw standardError
    }
  }

  remove() {
    try {
      localStorage.removeItem(this._localStorageItemName)
      this.resetCurrentUser()
    }
    catch (_) {
      throw new Error("Fail to remove authentication datas from localstorage")
    }
  }

  private defineUserAuthenticated(signInResponse: SignInResponse) {
    return new UserAuthenticated(signInResponse.profile, signInResponse.token, signInResponse.expiresIn)
  }

  private defineCurrentUser(user: UserAuthenticated) {
    this._currentUserAuthenticated = user
    this._haveCurrentUser = true
    this._syncronizedCurrentUser = true
  }

  private resetCurrentUser() {
    this._currentUserAuthenticated = this._emptyUserAuthenticated
    this._haveCurrentUser = false
    this._syncronizedCurrentUser = true
  }

  get currentUserAuthenticated() {
    let currentUserAuthenticatedToReturn = this._emptyUserAuthenticated
    if (this._syncronizedCurrentUser) {
      currentUserAuthenticatedToReturn = this._currentUserAuthenticated
    }
    else {
      try {
        currentUserAuthenticatedToReturn = this.get()
      }
      catch { }
    }

    return currentUserAuthenticatedToReturn
  }

  get haveCurrentUser() {
    if (!this._syncronizedCurrentUser) {
      try {
        this.get()
      }
      catch { }
    }
    return this._haveCurrentUser
  }

}
