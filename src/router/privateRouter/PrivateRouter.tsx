import { PrivateRoute } from "./PrivateRoute";
import { Menu } from "../../pages/Menu/Menu";
import { Home } from "../../pages/Home/Home";

export const PrivateRouter = () => {
  return (
    <>
      <PrivateRoute path="/menu">
        <Menu />
      </PrivateRoute>
      <PrivateRoute path="/home">
        <Home />
      </PrivateRoute>
    </>
  );
};
