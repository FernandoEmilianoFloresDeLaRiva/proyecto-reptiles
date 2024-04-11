import { useSelector } from "react-redux";
import { HeaderTime } from "../../components/HeaderTime/HeaderTime";
import { Nav } from "../../components/Nav/Nav";
import { RootState } from "../../redux/entities";
import plus from "../../assets/svgs/plus.svg";
import styles from "./Home.module.css";
import { ContainerMetrics } from "../../components/ContainerMetrics/ContainerMetrics";
import { useLocation } from "wouter";

export const Home = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const [_location, setLocation] = useLocation();
  const handlePlus = () => {
    setLocation("/create");
  };
  return (
    <main className={styles.main}>
      <Nav />
      <div className={styles.container}>
        <HeaderTime />
        <ContainerMetrics theme={theme} />
        <div className={styles.containerImg}>
          <a onClick={handlePlus}>
            <img className={styles.plusImg} src={plus} alt="plus-img" />
          </a>
        </div>
      </div>
    </main>
  );
};
