import React from "react";
import { Box } from "@mui/material";
import { LoginNavbar } from "../Components/layoutContainer";

function Dashboard() {
  return (
    <>
      <Box>
        <LoginNavbar>
          <Box>
            <h2>this is dashboard page</h2>
          </Box>
        </LoginNavbar>
      </Box>
    </>
  );
}

export default Dashboard;
