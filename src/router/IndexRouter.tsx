import styles from "./IndexRouter.module.css";
import { Route } from "wouter";
import { Register } from "../pages/Register/page/Register";
import { PrivateRouter } from "./privateRouter/PrivateRouter";
import { useSelector } from "react-redux";
import { RootState } from "../redux/entities";
import Login from "../pages/Login/page/Login";

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
