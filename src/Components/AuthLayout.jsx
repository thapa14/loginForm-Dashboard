import { Avatar, Paper } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
`;
const Wrapper = styled(Div)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Line = styled(Div)`
  height: 2px;
  background: gray;
  position: relative;
  margin: 2rem 0;
`;
const CardHeading = styled.h1`
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: gray;
  background-color: white;
  padding: 0.5rem;
`;

//  inline styling
const cardStyle = {
  width: "25rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2rem 1rem",
};

// const line = {
//   width: "100%",
//   height: "1px",
//   position: "relative",
//   background: "gray",
// };

function AuthLayout(props) {
  const { title, children, ...other } = props;

  return (
    <Wrapper>
      <Paper elevation={3} sx={cardStyle}>
        <Avatar></Avatar>
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

        {/* <Container>{children}</Container> */}
      </Paper>
    </Wrapper>
  );
}

export default AuthLayout;
