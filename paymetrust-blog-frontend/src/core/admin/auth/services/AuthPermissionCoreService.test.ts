import AuthUserLocalStorageSingletonRepository from "../repositories/AuthUserLocalStorageSingletonRepository";
import AuthPermissionCoreService from "./AuthPermissionCoreService";

describe("Test AuthPermissionCoreService", () => {
  test("Test Granted", ()=>{
    const AuthUserLocalStorageSingletonRepository = {
      haveCurrentUser: true
    } as unknown as AuthUserLocalStorageSingletonRepository
    const authPermissionCoreService = new AuthPermissionCoreService(AuthUserLocalStorageSingletonRepository)

    expect(authPermissionCoreService.checkAuthenticated()).toBeTruthy()
  })

  test("Test deny", ()=>{
    const AuthUserLocalStorageSingletonRepository = {
      haveCurrentUser: false
    } as unknown as AuthUserLocalStorageSingletonRepository
    const authPermissionCoreService = new AuthPermissionCoreService(AuthUserLocalStorageSingletonRepository)

    expect(authPermissionCoreService.checkAuthenticated()).toBeFalsy()
  })

  test("Test fail checking", ()=>{
    const AuthUserLocalStorageSingletonRepository = {
      get haveCurrentUser(){
        throw new Error()
      }
    } as unknown as AuthUserLocalStorageSingletonRepository
    const authPermissionCoreService = new AuthPermissionCoreService(AuthUserLocalStorageSingletonRepository)

    expect(authPermissionCoreService.checkAuthenticated()).toBeFalsy()
  })
})
