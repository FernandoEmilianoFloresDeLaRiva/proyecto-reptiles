import styles from "./IndexRouter.module.css";
import { Route, Switch } from "wouter";
import { Register } from "../pages/Register/page/Register";
import { PrivateRouter } from "./privateRouter/PrivateRouter";
import { useSelector } from "react-redux";
import { RootState } from "../redux/entities";
import Login from "../pages/Login/page/Login";
import { Page404 } from "../pages/404/Page404";

export const IndexRouter = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  return (
    <div className={styles.body}>
      <Switch>
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
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
};
