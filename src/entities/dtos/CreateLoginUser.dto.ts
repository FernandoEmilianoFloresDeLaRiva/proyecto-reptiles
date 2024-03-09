export class CreateLoginUserDto {
  username: string;
  passwordUser: string;
  constructor(username: string, password: string) {
    this.username = username;
    this.passwordUser = password;
  }
}
