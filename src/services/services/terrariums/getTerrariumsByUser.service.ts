import { BASE_URL_TERRAIUM } from "../../../constants";
import { TerrariumForList } from "../../../entities/entity";
import { getWithAuth } from "../../api";

export const getTerariumsByUserService = async (
  id: number,
  token: string
): Promise<TerrariumForList[]> => {
  try {
    const response = await getWithAuth(
      `${BASE_URL_TERRAIUM}/user/${id}`,
      token
    );
    return response;
  } catch (err: any) {
    throw new Error(err);
  }
};
