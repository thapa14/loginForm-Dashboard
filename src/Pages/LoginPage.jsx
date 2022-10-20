import React, { useState } from "react";
import AuthLayout from "../Components/AuthLayout";
import AuthType from "../Components/AuthType";
import Button from "../Components/Button";
import Checkbox from "../Components/Checkbox";
import Input from "../Components/Input";

const initalValue = {
  email: "",
  password: "",
  checkbox: false,
};

function LoginPage() {
  const [userLoginData, setUserLoginData] = useState(initalValue);
  return (
    <AuthLayout title="Log In" userData={userLoginData}>
      <Input
        name="email"
        id="login-email"
        label="Email"
        userData={userLoginData}
        setUserData={setUserLoginData}
      />
      <Input
        name="password"
        id="login-password"
        label="Password"
        type="password"
        userData={userLoginData}
        setUserData={setUserLoginData}
      />
      <Checkbox
        name="checkbox"
        label="Remember me"
        userData={userLoginData}
        setUserData={setUserLoginData}
      />
      <Button type="submit">Log In</Button>
      <AuthType messageType="Sign Up">Don't have an account!</AuthType>
    </AuthLayout>
  );
}

export default LoginPage;
