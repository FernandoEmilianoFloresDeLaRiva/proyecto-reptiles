import { useEffect, useState } from "react";
import { MetricsEntity } from "../entities/entity";
import { io } from "socket.io-client";

export const useMetrics = (terrariumId: number, codeEsp: string) => {
  const [metrics, setMetrics] = useState<MetricsEntity>({
    temperatura: 0,
    humedad: 0,
    uv: 0,
    agua: 0,
  });
  const [preventWater, setPreventWater] = useState<boolean>(false);
  useEffect(() => {
    const getSocketData = async () => {
      const socket = await io("http://44.221.215.74:8080");
      socket.on("showClient", (data: MetricsEntity) => {
        if (codeEsp === "" || terrariumId === 0) return;
        //we need to compare the terraium id with the real id terrarium
        if (terrariumId !== data?.id) return;
        // prevent water from level 800
        if (data.agua <= 800) {
          setPreventWater(true);
        } else if (data.agua >= 800) {
          setPreventWater(false);
        }
        //we should destructure the data
        //then the data will be the metrics state
        setMetrics(data);
      });
    };

    getSocketData();
  }, [terrariumId, codeEsp]);
  return [metrics, preventWater];
};
