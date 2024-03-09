import styles from "./TerrariumsList.module.css";
import { Terrarium } from "../Terrarium/Terrarium";

export const TerrariumsList = () => {
  return (
    <li className={styles.list}>
      <Terrarium />
      <Terrarium />
      <Terrarium />
      <Terrarium />
      <Terrarium />
      <Terrarium />
      <Terrarium />
      <Terrarium />
      <Terrarium />
      <Terrarium />
      <Terrarium />
      <Terrarium />
    </li>
  );
};
