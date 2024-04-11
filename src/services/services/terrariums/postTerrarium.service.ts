import { BASE_URL_TERRAIUM } from "../../../constants";
import { AddTerrariumDto } from "../../../entities/dtos/AddTerrarium.dto";
import { postWithAuth } from "../../api/postWithAuth";

export const postTerrariumService = async (
  data: AddTerrariumDto,
  token: string
): Promise<unknown> => {
  try {
    const response = await postWithAuth(BASE_URL_TERRAIUM, token, data);
    return response;
  } catch (err: any) {
    throw new Error(err);
  }
};
