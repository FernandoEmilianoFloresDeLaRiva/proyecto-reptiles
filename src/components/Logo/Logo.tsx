import React, { memo } from "react";
import styles from "./Logo.module.css";

interface Props {
  urlImg: string;
  title: string;
}

export const Logo: React.FC<Props> = memo(({ urlImg, title }) => {
  console.log("render at" + new Date().getTime());
  return (
    <figure className={styles.container}>
      <img src={urlImg} alt="Logo img" />
      <figcaption>{title}</figcaption>
    </figure>
  );
});
