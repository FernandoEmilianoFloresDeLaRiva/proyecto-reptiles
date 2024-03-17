import styles from "./IndexRouter.module.css";
import { Route } from "wouter";
import Login from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { PrivateRouter } from "./privateRouter/PrivateRouter";
import { useSelector } from "react-redux";
import { RootState } from "../redux/entities";

export const IndexRouter = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  return (
    <div className={styles.body}>
      {token ? (
        <PrivateRouter />
      ) : (
        <>
          <Route path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </>
      )}
    </div>
  );
};
