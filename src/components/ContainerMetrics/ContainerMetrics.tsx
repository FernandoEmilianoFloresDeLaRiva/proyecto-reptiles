import React from "react";
import styles from "./ContainerMetrics.module.css";
import { ThemeOptions } from "../../redux/entities";

interface Props {
  theme: ThemeOptions;
}

export const ContainerMetrics: React.FC<Props> = ({ theme }) => {
  return (
    <div
      className={`${styles.container} ${
        theme === "anfibios"
          ? styles.anfibiosContainer
          : styles.reptilesContainer
      }`}
    >
      <div className={styles.metrics}>a</div>
    </div>
  );
};
