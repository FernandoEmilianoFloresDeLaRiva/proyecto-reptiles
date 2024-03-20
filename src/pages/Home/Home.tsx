import { useSelector } from "react-redux";
import { HeaderTime } from "../../components/HeaderTime/HeaderTime";
import { Nav } from "../../components/Nav/Nav";
import { RootState } from "../../redux/entities";
import styles from "./Home.module.css";
import { ContainerMetrics } from "../../components/ContainerMetrics/ContainerMetrics";

export const Home = () => {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <main className={styles.main}>
      <Nav />
      <div className={styles.container}>
        <HeaderTime />
        <ContainerMetrics theme={theme} />
      </div>
    </main>
  );
};
