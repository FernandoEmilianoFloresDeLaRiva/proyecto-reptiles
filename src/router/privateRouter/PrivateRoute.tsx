import React, { ReactNode } from "react";
import { Redirect, Route } from "wouter";

interface Props {
  path: string;
  children: ReactNode;
  theme?: string;
  token?: string;
}

export const PrivateRoute: React.FC<Props> = ({
  path,
  children,
  theme,
  token,
}) => {
  return (
    <>
      {theme !== undefined ? (
        <Route path={path}>
          {theme !== "" ? children : <Redirect to="/" />}
        </Route>
      ) : (
        //aca validar con jwt
        <Route path={path}>{children}</Route>
      )}
    </>
  );
};
