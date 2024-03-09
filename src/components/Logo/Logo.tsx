import React from "react";
import styles from "./Logo.module.css";

interface Props {
  urlImg: string;
  title: string;
}

export const Logo: React.FC<Props> = ({ urlImg, title }) => {
  return (
    <figure className={styles.container}>
      <img src={urlImg} alt="Logo img" />
      <figcaption>{title}</figcaption>
    </figure>
  );
};
