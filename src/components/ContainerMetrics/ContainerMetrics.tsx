import styles from "./ContainerMetrics.module.css";
import { ContainerImg } from "../../pages/Home/components/ContainerImg/ContainerImg";
import { Metrics } from "../../pages/Home/components/Metrics/Metrics";
import { InfoTerrarium } from "../../pages/Home/components/InfoTerrarium/InfoTerrarium";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/entities";

export const ContainerMetrics = () => {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <section className={styles.container}>
      <ContainerImg />
      <InfoTerrarium terrariumName={"Terrario Rex"} theme={theme} />
      <Metrics theme={theme} />
    </section>
  );
};
