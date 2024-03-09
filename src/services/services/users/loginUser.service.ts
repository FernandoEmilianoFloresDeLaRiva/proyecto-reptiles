import { BASE_URL_USERS } from "../../../constants/BASE_URL_USERS";
import { CreateLoginUserDto } from "../../../entities/dtos/CreateLoginUser.dto";
import { LoginUserBase } from "../../../entities/entity";
import { postWithoutAuth } from "../../api/postWithoutAuth";

export const loginUserService = async (data: LoginUserBase) => {
  try {
    const loginUserDTO = new CreateLoginUserDto(data);
    const response = await postWithoutAuth(
      `${BASE_URL_USERS}/login`,
      loginUserDTO
    );
    console.log(response);
  } catch (err: any) {
    throw new Error(err);
  }
};
