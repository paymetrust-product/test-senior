/**
 * @jest-environment jsdom
 */

import UserAuthenticated from "../entities/UserAuthenticated";
import AuthUserLocalStorageSingletonRepository from "../repositories/AuthUserLocalStorageSingletonRepository";
import AuthUserLocalStorageSingletonCoreService from "./AuthUserLocalStorageSingletonCoreService";

const defaultAuthenticationProfile = {
  username: "",
  role: {
    id: 0,
    label: "",
    permissions: [],
    createdBy: { id: 0, username: "" },
    createdAt: ""
  }
}

const localStorageMock = (function () {
  let store: any = {};

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: any) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key: string) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("Test AuthUserLocalStorageSingletonCoreService", () => {
  beforeEach(() => {
    AuthUserLocalStorageSingletonCoreService.getInstance().remove()
  })

  test("Test should have only one instance for all getting instance", () => {
    const userAUthenticated = new UserAuthenticated(defaultAuthenticationProfile, "12345", 0)

    const authUserLocalStorageSingletonCoreServiceOne: AuthUserLocalStorageSingletonRepository = AuthUserLocalStorageSingletonCoreService.getInstance()
    authUserLocalStorageSingletonCoreServiceOne.save(userAUthenticated);

    const authUserLocalStorageSingletonCoreServiceTwo: AuthUserLocalStorageSingletonRepository = AuthUserLocalStorageSingletonCoreService.getInstance()

    expect(authUserLocalStorageSingletonCoreServiceOne.currentUserAuthenticated).toEqual(authUserLocalStorageSingletonCoreServiceTwo.currentUserAuthenticated)
  })

  test("Test current user defined should equal to localStorage saved datas", () => {
    const userAUthenticated = new UserAuthenticated(defaultAuthenticationProfile, "12345", 0)
    const authUserLocalStorageSingletonCoreService: AuthUserLocalStorageSingletonRepository = AuthUserLocalStorageSingletonCoreService.getInstance()

    expect(authUserLocalStorageSingletonCoreService.haveCurrentUser).toBeFalsy()
    expect(authUserLocalStorageSingletonCoreService.currentUserAuthenticated).toEqual(new UserAuthenticated(defaultAuthenticationProfile, "", 0))

    authUserLocalStorageSingletonCoreService.save(userAUthenticated);
    expect(authUserLocalStorageSingletonCoreService.get()).toEqual(userAUthenticated)

    expect(authUserLocalStorageSingletonCoreService.currentUserAuthenticated).toEqual(userAUthenticated)
    expect(authUserLocalStorageSingletonCoreService.haveCurrentUser).toBeTruthy()
  })

  test("Test localStorage should be called only one time except for save() and remove() method", () => {
    const spyLocalStorageSetItem = jest.spyOn(window.localStorage, "setItem")
    const spyLocalStorageGetItem = jest.spyOn(window.localStorage, "getItem")
    const spyLocalStorageRemoveItem = jest.spyOn(window.localStorage, "removeItem")
    const userAUthenticated = new UserAuthenticated(defaultAuthenticationProfile, "12345", 0)
    const authUserLocalStorageSingletonCoreService: AuthUserLocalStorageSingletonRepository = AuthUserLocalStorageSingletonCoreService.getInstance()

    authUserLocalStorageSingletonCoreService.save(userAUthenticated);
    authUserLocalStorageSingletonCoreService.get()
    authUserLocalStorageSingletonCoreService.haveCurrentUser
    authUserLocalStorageSingletonCoreService.currentUserAuthenticated
    authUserLocalStorageSingletonCoreService.remove()

    expect(spyLocalStorageSetItem).toHaveBeenCalledTimes(1)
    expect(spyLocalStorageGetItem).toHaveBeenCalledTimes(0)
    expect(spyLocalStorageRemoveItem).toHaveBeenCalledTimes(1)
  })
})

