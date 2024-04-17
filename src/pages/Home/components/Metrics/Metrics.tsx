import styles from "./Metrics.module.css";
import { ParticularMetric } from "../ParticularMetric/ParticularMetric";
import { ThemeOptions } from "../../../../redux/entities";
import React from "react";
import { useMetrics } from "../../../../hooks/useMetrics";

interface Props {
  theme: ThemeOptions;
  terrariumId: number;
  esp32Code: string;
}

export const Metrics: React.FC<Props> = ({ theme, terrariumId, esp32Code }) => {
  const { temperatura, uv, humedad } = useMetrics(terrariumId, esp32Code);
  return (
    <div
      className={`${styles.container} ${
        theme === ThemeOptions.ANFIBIOS ? styles.anfibios : styles.reptiles
      } `}
    >
      {humedad !== null && (
        <ParticularMetric metricData={`${humedad}%`} metricName="Humedad" />
      )}
      {temperatura !== null && (
        <ParticularMetric
          metricData={`${temperatura.toString().substring(0, 4)}°C`}
          metricName="Temperatura"
        />
      )}
      {uv !== null && <ParticularMetric metricData={`${uv}`} metricName="UV" />}
    </div>
  );
};
