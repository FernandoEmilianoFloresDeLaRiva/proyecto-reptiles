import { BASE_URL_USERS } from "../../../constants/BASE_URL_USERS";
import { CreateRegisterUserDTO } from "../../../entities/dtos/CreateRegisterUser.dto";
import { RegisterUserBase } from "../../../entities/entity";
import { postWithoutAuth } from "../../api/postWithoutAuth";

export const registerUserService = async (data: RegisterUserBase) => {
  try {
    const registerUserDTO = new CreateRegisterUserDTO(data);
    const response = await postWithoutAuth(
      `${BASE_URL_USERS}`,
      registerUserDTO
    );
    console.log(response);
  } catch (err: any) {
    throw new Error(err);
  }
};
