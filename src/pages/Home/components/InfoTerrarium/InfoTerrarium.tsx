import React from "react";
import styles from "./InfoTerrarium.module.css";

interface Props {
  terrariumName: string;
}

export const InfoTerrarium: React.FC<Props> = ({ terrariumName }) => {
  return (
    <div className={styles.container}>
      <span>{terrariumName !== "" ? terrariumName :  "Seleccione un terrario"}</span>
    </div>
  );
};
