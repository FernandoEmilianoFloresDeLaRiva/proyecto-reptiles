export class CreateRegisterUserDTO {
  username: string;
  email: string;
  password: string;
  userProfile: { name: string; last_name: string };
  constructor(
    username: string,
    email: string,
    password: string,
    name: string,
    last_name: string
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.userProfile = { name: name, last_name: last_name };
  }
}
