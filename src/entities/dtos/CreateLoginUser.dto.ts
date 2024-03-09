import { LoginUserBase } from "../entity";

export class CreateLoginUserDto {
  username: string;
  passwordUser: string;
  constructor(userLoginReq: LoginUserBase) {
    const { username, password } = userLoginReq;
    this.username = username;
    this.passwordUser = password;
  }
}
