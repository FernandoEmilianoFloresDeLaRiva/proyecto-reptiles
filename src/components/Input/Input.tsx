import React, { HTMLInputTypeAttribute } from "react";
import styles from "./Input.module.css";

interface Props {
  text: string;
  type?: HTMLInputTypeAttribute;
}

export const Input: React.FC<Props> = ({ text, type }) => {
  return <input type={type} placeholder={text} className={styles.input} />;
};
