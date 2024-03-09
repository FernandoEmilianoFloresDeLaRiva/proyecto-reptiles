import styles from "./HeaderTime.module.css";

export const HeaderTime = () => {
  const actualDate = new Date();
  return (
    <header className={styles.header}>
      <span>{`${actualDate.getDate()} - ${
        actualDate.getMonth() + 1
      } - ${actualDate.getFullYear()}`}</span>
      <br />
      <span>{`${actualDate.getHours()} : ${actualDate.getMinutes()}`}</span>
    </header>
  );
};
