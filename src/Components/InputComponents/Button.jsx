import { Button as MuiButton } from "@mui/material";
import React from "react";

function Button(props) {
  const { children, variant, ...other } = props;
  return (
    <MuiButton
      color="primary"
      variant={variant || "contained"}
      sx={{ margin: "1rem" }}
      {...other}
    >
      {children}
    </MuiButton>
  );
}

export default Button;
