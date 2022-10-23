import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography } from "@mui/material";
import { LoggedUserContext, SetLoggedUserContext } from "../App";
import { Button, Input } from "../Components/inputContainer";
import { LoginNavbar } from "../Components/layoutContainer";

const initialValue = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};
function ResetPassword() {
  // states
  const history = useNavigate();
  const loggedUser = useContext(LoggedUserContext);
  const SetLoggedUser = useContext(SetLoggedUserContext);
  const [userData, setUserData] = useState(initialValue);
  const [error, setError] = useState({});

  const validate = () => {
    const tempError = {};
    tempError.currentPassword =
      userData.currentPassword.length > 3 ? "" : " password is too short";
    tempError.newPassword =
      userData.newPassword.length > 3 ? "" : "password is too short";
    tempError.confirmPassword =
      userData.confirmPassword === userData.newPassword
        ? ""
        : "password didn't match";

    setError({ ...tempError });

    return Object.values(tempError).every((el) => el === "");
  };

  const handleOnsubmitClick = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const userList = JSON.parse(window.localStorage.getItem("userList"));
    if (loggedUser.password === userData.currentPassword) {
      history("/dashboard");
      const loggedUserIndex = userList.findIndex(
        (user) => user.email === loggedUser.email
      );

      userList[loggedUserIndex].password = userData.newPassword;
      window.localStorage.setItem("userList", JSON.stringify(userList));
      SetLoggedUser(userList[loggedUserIndex]);
    } else {
      setUserData(initialValue);
      alert("wrong password");
    }
  };

  return (
    <Box>
      <LoginNavbar>
        <Box>
          <form
            autoComplete="off"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2.5rem",
            }}
            onSubmit={handleOnsubmitClick}
          >
            <Paper
              elevation={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "320px",
                padding: "1rem",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontWeight: 600,
                  textAlign: "center",
                  marginBottom: "0.5rem",
                }}
              >
                Reset Password
              </Typography>

              <Input
                id="current-password"
                label="Current Password"
                name="currentPassword"
                type="password"
                userData={userData}
                setUserData={setUserData}
                variant="filled"
                {...(error.currentPassword && {
                  error: true,
                  helperText: error.currentPassword,
                })}
              />
              <Input
                id="new-password"
                label=" Password"
                name="newPassword"
                type="password"
                userData={userData}
                setUserData={setUserData}
                variant="filled"
                {...(error.newPassword && {
                  error: true,
                  helperText: error.newPassword,
                })}
              />
              <Input
                id="confirm-password"
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                userData={userData}
                setUserData={setUserData}
                variant="filled"
                {...(error.confirmPassword && {
                  error: true,
                  helperText: error.confirmPassword,
                })}
              />
              <Button type="submit">Save</Button>
            </Paper>
          </form>
        </Box>
      </LoginNavbar>
    </Box>
  );
}

export default ResetPassword;
