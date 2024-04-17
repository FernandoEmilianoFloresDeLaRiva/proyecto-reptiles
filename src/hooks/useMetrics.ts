import { useEffect, useState } from "react";
import { MetricsEntity } from "../entities/entity";
import { io } from "socket.io-client";

export const useMetrics = (terrariumId: number) => {
  const [metrics, setMetrics] = useState<MetricsEntity>({
    temperatura: 0,
    humedad: 0,
    uv: 0,
    agua: 0,
  });
  useEffect(() => {
    const getSocketData = async () => {
      const socket = await io("http://44.221.215.74:8080");
      socket.on("showClient", (data: MetricsEntity) => {
        // agua 800
        console.log(data);
        //we need to compare the terraium id with the real id terrarium
        if (data.agua <= 800) {
          window.alert(
            "El agua del terrario se esta acabando, llene con mas agua!"
          );
        }
        // ? if (terrariumId !== data.id) return;
        //we should destructure the data
        //then the data will be the metrics state
        setMetrics(data);
      });
    };
    getSocketData();
  }, [terrariumId]);
  return metrics;
};
