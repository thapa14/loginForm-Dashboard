import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SetLoggedUserContext, AuthContext } from "../App";
import { AuthLayout, AuthType } from "../Components/layoutContainer";
import { Button, Checkbox, Input } from "../Components/inputContainer";

const initalValue = {
  email: "",
  password: "",
  checkbox: false,
};

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function LoginPage() {
  // states
  const authValue = useContext(AuthContext);
  const setLoggedUserData = useContext(SetLoggedUserContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const [userLoginData, setUserLoginData] = useState(() => {
    const savedData = JSON.parse(
      window.localStorage.getItem("savedCredentials")
    );
    if (savedData) return savedData;
    return initalValue;
  });

  const validate = () => {
    const tempError = {};
    tempError.email = /.+@..+/.test(userLoginData.email) ? "" : "invalid Email";
    tempError.password =
      userLoginData.password.length > 2 ? "" : "password is too short";

    setError({ ...tempError });
    return Object.values(tempError).every((el) => el === "");
  };

  // const login function
  const loginClick = (e) => {
    let validation = validate();
    e.preventDefault();
    if (!validation) {
      return;
    }

    const userList = JSON.parse(window.localStorage.getItem("userList"));
    if (userList) {
      const index = userList.findIndex(
        (el) => el.email === userLoginData.email
      );

      if (index >= 0) {
        if (userList[index].password === userLoginData.password) {
          authValue.login().then(() => {
            navigate("/dashboard");
          });
          navigate("/dashboard");
          if (userLoginData.checkbox) {
            window.localStorage.setItem(
              "savedCredentials",
              JSON.stringify(userLoginData)
            );
          } else {
            window.localStorage.removeItem("savedCredentials");
          }
          setLoggedUserData(userList[index]);
        } else {
          alert("wrong password");
        }

        setUserLoginData(initalValue);
      }
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <AuthLayout
      title="Log In"
      navButton="sign Up"
      message="signup"
      onSubmit={loginClick}
    >
      <Input
        name="email"
        id="login-email"
        label="Email"
        userData={userLoginData}
        setUserData={setUserLoginData}
        {...(error.email && { error: true, helperText: error.email })}
      />
      <Input
        name="password"
        id="login-password"
        label="Password"
        type="password"
        userData={userLoginData}
        setUserData={setUserLoginData}
        {...(error.password
          ? { error: true, helperText: error.password }
          : { error: false, helperText: "" })}
      />
      <Div>
        <Checkbox
          name="checkbox"
          label="Remember me"
          userData={userLoginData.checkbox}
          setUserData={setUserLoginData}
        />
        <Link
          to="/forgetPassword"
          style={{ textDecoration: "none", color: "#1976d2" }}
        >
          Forget Password
        </Link>
      </Div>
      <Button type="submit">Log In</Button>
      <AuthType message="signup" messageType="Sign Up">
        Don't have an account!
      </AuthType>
    </AuthLayout>
  );
}

export default LoginPage;
