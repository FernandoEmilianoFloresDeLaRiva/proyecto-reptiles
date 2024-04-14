import styles from "./HeaderTime.module.css";

export const HeaderTime = () => {
  const actualDate = new Date();
  return (
    <header className={styles.header}>
      <span>{`${actualDate.getDate()} - ${actualDate.getMonth() <9 ? `0${actualDate.getMonth() +1}` : `${actualDate.getMonth()}`} - ${actualDate.getFullYear()}`}</span>
      <br />
      <span>{`${actualDate.getHours()} : ${actualDate.getMinutes() <9 ? `0${actualDate.getMinutes()}`: `${actualDate.getMinutes()}`}`}</span>
    </header>
  );
};
