import React from "react";
import styles from "./Logo.module.css"

interface Props {
  urlImg: string;
}

export const Logo: React.FC<Props> = ({ urlImg }) => {
  return (
    <figure className={styles.container}>
      <img src={urlImg} alt="Logo img" />
      <figcaption>TERRARIUM</figcaption>
    </figure>
  );
};
