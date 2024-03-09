import { PrivateRoute } from "./PrivateRoute";
import { Menu } from "../../pages/Menu/Menu";
import { Home } from "../../pages/Home/Home";
import { useSelector } from "react-redux";
import { RootState } from "../../entities/entity/reduxState.entity";

export const PrivateRouter = () => {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <>
      <PrivateRoute path="/menu">
        <Menu />
      </PrivateRoute>
      <PrivateRoute path="/home" theme={theme}>
        <Home />
      </PrivateRoute>
    </>
  );
};
