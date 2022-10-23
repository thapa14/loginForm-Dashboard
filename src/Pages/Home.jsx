import React from "react";
import { Box } from "@mui/material";
import { Navbar } from "../Components/layoutContainer";

function Home() {
  return (
    <>
      <Navbar navButton="Log In" message="login" />;
      <Box style={{ display: "grid", placeItems: "center" }}>
        <h1>this is home page</h1>
      </Box>
    </>
  );
}

export default Home;
