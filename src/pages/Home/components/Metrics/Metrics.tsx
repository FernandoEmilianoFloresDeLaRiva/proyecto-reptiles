import styles from "./Metrics.module.css";
import { ParticularMetric } from "../ParticularMetric/ParticularMetric";
import { ThemeOptions } from "../../../../redux/entities";
import React from "react";
import { useMetrics } from "../../../../hooks/useMetrics";

interface Props {
  theme: ThemeOptions;
  terrariumId: number;
}

export const Metrics: React.FC<Props> = ({ theme, terrariumId }) => {
  const { temperatura, uv, humedad } = useMetrics(terrariumId);
  return (
    <div
      className={`${styles.container} ${
        theme === ThemeOptions.ANFIBIOS ? styles.anfibios : styles.reptiles
      } `}
    >
      {humedad !== undefined && (
        <ParticularMetric metricData={`${humedad}%`} metricName="Humedad" />
      )}
      {temperatura !== undefined && (
        <ParticularMetric
          metricData={`${temperatura.toString().substring(0, 4)}°C`}
          metricName="Temperatura"
        />
      )}
      {uv !== undefined && (
        <ParticularMetric metricData={`${uv}`} metricName="UV" />
      )}
    </div>
  );
};
