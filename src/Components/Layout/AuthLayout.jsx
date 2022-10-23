import React from "react";
import styled from "styled-components";
import { Avatar, Paper } from "@mui/material";
import Navbar from "./Navbar";

const Div = styled.div`
  width: 100%;
`;
const Wrapper = styled(Div)`
  height: 100vh;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
`;
const PaperDiv = styled(Div)`
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Line = styled(Div)`
  height: 1.5px;
  background: black;
  position: relative;
  margin: 2rem 0;
`;
const CardHeading = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: black;
  background-color: white;
  padding: 0 0.5rem;
`;

//  inline styling
const cardStyle = {
  width: "25rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2rem 1rem",
};

function AuthLayout(props) {
  const { title, children, navButton, message, ...other } = props;

  return (
    <Wrapper>
      <Navbar navButton={navButton} message={message} />
      <PaperDiv>
        <Paper elevation={3} sx={cardStyle}>
          <Avatar sx={{ backgroundColor: "#1976d2" }}></Avatar>
          <Line>
            <CardHeading>{title}</CardHeading>
          </Line>
          {/* <Form userData={userData}>{children}</Form> */}
          <form
            {...other}
            autoComplete="off"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {children}
          </form>
        </Paper>
      </PaperDiv>
    </Wrapper>
  );
}

export default AuthLayout;
