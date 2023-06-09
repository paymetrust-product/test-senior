import UserAuthenticated from "../entities/UserAuthenticated";

export default interface AuthUserLocalStorageSingletonRepository{
  currentUserAuthenticated: UserAuthenticated
  haveCurrentUser: boolean
  saveWithoutSyncCurrentUser(userAuthenticated: UserAuthenticated): void;
  save(userAuthenticated: UserAuthenticated): UserAuthenticated;
  getWithoutSyncCurrentUser(): UserAuthenticated;
  get(): UserAuthenticated;
  remove(): void;
}
