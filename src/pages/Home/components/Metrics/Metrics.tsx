import styles from "./Metrics.module.css";
import { ParticularMetric } from "../ParticularMetric/ParticularMetric";
import { ThemeOptions } from "../../../../redux/entities";
import React from "react";

interface Props {
  theme: ThemeOptions;
}

export const Metrics: React.FC<Props> = ({ theme }) => {
  return (
    <div
      className={`${styles.container} ${
        theme === ThemeOptions.ANFIBIOS ? styles.anfibios : styles.reptiles
      } `}
    >
      <ParticularMetric metricData="10%" metricName="Humedad" />
      <ParticularMetric metricData="30°C" metricName="Temperatura" />
      <ParticularMetric metricData="20" metricName="UV" />
    </div>
  );
};
