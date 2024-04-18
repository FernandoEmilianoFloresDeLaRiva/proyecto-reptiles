import styles from "./ContainerMetrics.module.css";
import { ContainerImg } from "../../pages/Home/components/ContainerImg/ContainerImg";
import { Metrics } from "../../pages/Home/components/Metrics/Metrics";
import { InfoTerrarium } from "../../pages/Home/components/InfoTerrarium/InfoTerrarium";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/entities";
import { useContext } from "react";
import { TerrariumContext } from "../../pages/Home/context";

export const ContainerMetrics = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const { token } = useSelector((state: RootState) => state.auth);
  const { terrarium } = useContext(TerrariumContext);
  return (
    <section className={styles.container}>
      <ContainerImg />
      <InfoTerrarium terrariumName={terrarium.name} />
      <Metrics
        theme={theme}
        terrariumId={terrarium.id}
        esp32Code={terrarium.esp32Code}
        token={token}
      />
    </section>
  );
};
