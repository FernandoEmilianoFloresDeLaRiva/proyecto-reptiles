import { HeaderTime } from "../../components/HeaderTime/HeaderTime";
import { Nav } from "../../components/Nav/Nav";
import plus from "../../assets/svgs/plus.svg";
import styles from "./Home.module.css";
import { ContainerMetrics } from "../../components/ContainerMetrics/ContainerMetrics";
import { useLocation } from "wouter";

export const Home = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_location, setLocation] = useLocation();
  const handlePlus = () => {
    setLocation("/create");
  };
  return (
    <main className={styles.main}>
      <Nav />
      <div className={styles.container}>
        <HeaderTime />
        <ContainerMetrics />
        <div className={styles.containerImg}>
          <a onClick={handlePlus}>
            <img className={styles.plusImg} src={plus} alt="plus-img" />
          </a>
        </div>
      </div>
    </main>
  );
};
