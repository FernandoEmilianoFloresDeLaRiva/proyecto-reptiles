import { PrivateRoute } from "./PrivateRoute";
import { Menu } from "../../pages/Menu/Menu";
import { Home } from "../../pages/Home/Home";
import { AddTerrarium } from "../../pages/AddTerrarium/AddTerrarium";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/entities";

export const PrivateRouter = () => {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <>
      <PrivateRoute path="/">
        <Menu />
      </PrivateRoute>
      <PrivateRoute path="/home" theme={theme}>
        <Home />
      </PrivateRoute>
      <PrivateRoute path="/create">
        <AddTerrarium/>
      </PrivateRoute>
    </>
  );
};
