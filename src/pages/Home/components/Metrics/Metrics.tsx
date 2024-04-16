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
  const { temperature, uv, humidity } = useMetrics(terrariumId);
  return (
    <div
      className={`${styles.container} ${
        theme === ThemeOptions.ANFIBIOS ? styles.anfibios : styles.reptiles
      } `}
    >
      <ParticularMetric metricData={`${humidity}%`} metricName="Humedad" />
      <ParticularMetric
        metricData={`${temperature}°C`}
        metricName="Temperatura"
      />
      <ParticularMetric metricData={`${uv}`} metricName="UV" />
    </div>
  );
};
