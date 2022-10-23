import { Link } from "react-router-dom";
import React from "react";

function AuthType(props) {
  const { message, messageType, children } = props;
  return (
    <p>
      {children}
      <Link
        to={`/${message}`}
        underline="none"
        style={{ textDecoration: "none" }}
      >
        {messageType}
      </Link>
    </p>
  );
}

export default AuthType;
