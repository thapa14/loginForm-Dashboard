import { Link } from "@mui/material";
import React from "react";

function AuthType(props) {
  const { messageType, children } = props;
  return (
    <p>
      {children}
      <Link href="#" underline="none">
        {" "}
        {messageType}
      </Link>
    </p>
  );
}

export default AuthType;
