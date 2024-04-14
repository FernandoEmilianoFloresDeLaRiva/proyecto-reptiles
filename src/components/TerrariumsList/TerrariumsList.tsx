import styles from "./TerrariumsList.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/entities";
import { useTerrariumsByUser } from "../../hooks/useTerrariumsByUser";
import { Suspense, lazy } from "react";

const TerrariumLazy = lazy(() => import("../Terrarium/Terrarium"));

export const TerrariumsList = () => {
  const { id, token } = useSelector((state: RootState) => state.auth);
  const { terrariums, isloading } = useTerrariumsByUser(id, token);
  return (
    <li className={styles.list}>
      {!isloading && (
        <Suspense fallback={"cargando..."}>
          {terrariums.map(({ id, name }) => {
            return <TerrariumLazy key={id} terrariumName={name} />;
          })}
        </Suspense>
      )}
    </li>
  );
};
