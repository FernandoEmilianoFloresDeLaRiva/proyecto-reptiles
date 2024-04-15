import reptilImg from "../../../../assets/imgs/gecko_home.png";
import fromImg from "../../../../assets/imgs/frog_home.png";
import { RootState, ThemeOptions } from "../../../../redux/entities";
import styles from "./ContainerImg.module.css";
import { useSelector } from "react-redux";
import { memo } from "react";

export const ContainerImg = memo(() => {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <picture className={styles.container}>
      <img
        src={theme === ThemeOptions.ANFIBIOS ? fromImg : reptilImg}
        alt={`img from theme ${theme}`}
        className={
          theme === ThemeOptions.ANFIBIOS
            ? styles.anfibiosContainer
            : styles.reptilesContainer
        }
      />
    </picture>
  );
});
