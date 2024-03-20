import styles from "./IndexRouter.module.css";
import { Route } from "wouter";
import Login from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import {AddTerrarium} from "../pages/AddTerrarium/AddTerrarium";
import { PrivateRouter } from "./privateRouter/PrivateRouter";

export const IndexRouter = () => {
  return (
    <div className={styles.body}>
      <Route path="/">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/addTerrarium">
        <AddTerrarium/>
      </Route>
      {/* añadir condicional para las rutas privadas*/}
      <PrivateRouter/> 
    </div>
  );
};
