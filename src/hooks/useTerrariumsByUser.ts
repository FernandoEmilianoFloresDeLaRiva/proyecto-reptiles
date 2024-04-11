import { useEffect, useState } from "react";
import { getTerariumsByUserService } from "../services/services/terrariums/getTerrariumsByUser.service";
import { TerrariumForList } from "../entities/entity";

export const useTerrariumsByUser = (id: number = 0, token: string) => {
  const [terrariums, setTerrariums] = useState<TerrariumForList[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setIsLoading(true);
    if (id === 0) return;
    getTerariumsByUserService(id, token)
      .then((res: TerrariumForList[]) => {
        setTerrariums(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return {
    terrariums,
    isloading,
  };
};
