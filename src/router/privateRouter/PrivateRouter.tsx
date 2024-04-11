import { PrivateRoute } from "./PrivateRoute";
import { Menu } from "../../pages/Menu/Menu";
import { Home } from "../../pages/Home/Home";
import { AddTerrarium } from "../../pages/AddTerrarium/page/AddTerrarium";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/entities";
import { Route, Switch } from "wouter";
import { Page404 } from "../../pages/404/Page404";

export const PrivateRouter = () => {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <Switch>
      <PrivateRoute path="/">
        <Menu />
      </PrivateRoute>
      <PrivateRoute path="/home" theme={theme}>
        <Home />
      </PrivateRoute>
      <PrivateRoute path="/create">
        <AddTerrarium />
      </PrivateRoute>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
