import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../App";

function RequireAuth({ children }) {
  const authValue = useContext(AuthContext);

  return authValue.authed === true ? children : <Navigate to="/" replace />;
}

export default RequireAuth;
