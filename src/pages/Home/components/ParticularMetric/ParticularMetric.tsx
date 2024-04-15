import React from "react";
import styles from "./ParticularMetric.module.css";

interface Props {
  metricName: string;
  metricData: string;
}

export const ParticularMetric: React.FC<Props> = ({
  metricData,
  metricName,
}) => {
  return (
    <div className={styles.container}>
      <span className={styles.containerNumber}>{metricData}</span>
      <span className={styles.containerParagraph}>{metricName}</span>
    </div>
  );
};
