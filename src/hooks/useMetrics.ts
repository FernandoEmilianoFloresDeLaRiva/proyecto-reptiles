import { useEffect, useState } from "react";
import { MetricsEntity } from "../entities/entity";
import { io } from "socket.io-client";

export const useMetrics = (terrariumId: number) => {
  const [metrics, setMetrics] = useState<MetricsEntity>({
    temperature: 0,
    humidity: 0,
    uv: 0,
  });
  useEffect(() => {
    const getSocketData = async () => {
      const socket = await io("http://44.221.215.74:8080");
      socket.on("showClient", (data: MetricsEntity) => {
        //we need to compare the terraium id with the real id terrarium
        if (terrariumId !== data.id) return;
        //we shoul desestruct the data
        //then the data will be the metrics state
        setMetrics(data);
      });
    };
    getSocketData();
  }, [terrariumId]);
  return metrics;
};
