import styles from "./IndexRouter.module.css";
import { Route } from "wouter";
import Login from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";

export const IndexRouter = () => {
  return (
    <div className={styles.body}>
      <Route path="/">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </div>
  );
};
