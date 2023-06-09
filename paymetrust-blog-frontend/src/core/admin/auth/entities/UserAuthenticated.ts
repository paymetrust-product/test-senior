import { SignInProfile, SignInResponse } from "./SignInResponse";

export default class UserAuthenticated{
  constructor(public profile: SignInProfile, public token: string, public expiresIn: number){}
}
