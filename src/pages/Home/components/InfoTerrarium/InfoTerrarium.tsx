import React from "react";
import styles from "./InfoTerrarium.module.css";
import { ThemeOptions } from "../../../../redux/entities";

interface Props {
  terrariumName: string;
  theme: ThemeOptions;
}

export const InfoTerrarium: React.FC<Props> = ({ terrariumName, theme }) => {
  return (
    <div className={styles.container}>
      <span>{terrariumName}</span>
      <div className={styles.containerButtons}>
        <button
          className={
            theme === ThemeOptions.ANFIBIOS ? styles.anfibios : styles.reptiles
          }
        >
          Editar
        </button>
        <button
          className={
            theme === ThemeOptions.ANFIBIOS ? styles.anfibios : styles.reptiles
          }
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
