import { ITokenResponse } from "../entity";

export class CreateTokenResponse {
  token: string;
  constructor(tokenRes: ITokenResponse) {
    const { token } = tokenRes;
    this.token = token;
  }
}
