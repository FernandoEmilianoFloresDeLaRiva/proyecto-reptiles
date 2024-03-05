import React, { ReactNode } from "react";
import { Route } from "wouter";

interface Props {
  path: string;
  children: ReactNode;
}

export const PrivateRoute: React.FC<Props> = ({ path, children }) => {
  return <Route path={path}>{children}</Route>;
};
