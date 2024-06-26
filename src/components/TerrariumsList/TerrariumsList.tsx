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
      {!isloading && terrariums.length ? (
        <Suspense fallback={"cargando..."}>
          {terrariums.map(({ id, name, codeEsp }) => {
            return (
              <TerrariumLazy
                key={id}
                terrariumName={name}
                id={id}
                esp32Code={codeEsp}
              />
            );
          })}
        </Suspense>
      ) : (
        <span>No hay terrarios registrados!</span>
      )}
    </li>
  );
};
