import React, { ReactNode } from "react";
import { Redirect, Route } from "wouter";

interface Props {
  path: string;
  children: ReactNode;
  theme?: string;
}

export const PrivateRoute: React.FC<Props> = ({ path, children, theme }) => {
  return (
    <>
      {theme !== undefined ? (
        <Route path={path}>
          {theme !== "" ? children : <Redirect to="/" />}
        </Route>
      ) : (
        <Route path={path}>{children}</Route>
      )}
    </>
  );
};
