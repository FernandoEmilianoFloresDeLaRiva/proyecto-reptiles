import { ReactNode } from "react";
import styles from "./ContainerErrorInput.module.css";

interface Props {
  children: ReactNode;
}

export const ContainerErrorInput: React.FC<Props> = ({ children }) => {
  return <div className={styles.containerInputError}>{children}</div>;
};
