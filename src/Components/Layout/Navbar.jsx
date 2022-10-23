import * as React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";

export default function ButtonAppBar({ navButton, message }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, foneWeight: 600 }}
        >
          LOGO
        </Typography>
        <Link
          to={`/${message}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <Button color="inherit" variant="outlined" size="small">
            {navButton}
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
