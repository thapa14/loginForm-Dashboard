import React, { useState } from "react";
import AuthLayout from "../Components/AuthLayout";
import Button from "../Components/Button";
import Input from "../Components/Input";
import Checkbox from "../Components/Checkbox";
import AuthType from "../Components/AuthType";

const initialValue = {
  fullName: "",
  email: "",
  password: "",
  checkbox: false,
  confirmPassword: "",
};

function RegistrationPage() {
  const [userData, setUserData] = useState(initialValue);
  const [error, setError] = useState({});

  const validate = () => {
    let temp = {};
    temp.fullName = userData.fullName ? "" : "This field can't be empty";
    temp.email = /.+@..+/.test(userData.email) ? "" : "email is not valid";
    temp.password = userData.password.length > 2 ? "" : "password is too sort";
    temp.confirmPassword =
      userData.password === userData.confirmPassword
        ? ""
        : "password doesn't match";
    setError(() => ({ ...temp }));
    console.log(error);
    return Object.values(temp).every((el) => el === "");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    validate();
    if (validate()) console.log("helo");
  };

  return (
    <>
      <AuthLayout title="Registration" onSubmit={handleFormSubmit}>
        <Input
          id="user-name"
          label="Name"
          name="fullName"
          userData={userData}
          setUserData={setUserData}
          {...(error.fullName && {
            error: true,
            helperText: "invalid Name",
          })}
        />
        <Input
          id="user-email"
          label="Email"
          name="email"
          userData={userData}
          setUserData={setUserData}
          {...(error.email && {
            error: true,
            helperText: "invalid Email",
          })}
        />
        <Input
          id="user-password"
          type="password"
          label="Password"
          name="password"
          userData={userData}
          setUserData={setUserData}
          {...(error.password && {
            error: true,
            helperText: "passworld is too small",
          })}
        />
        <Input
          id="confirm-password"
          type="password"
          label="Password"
          name="confirmPassword"
          userData={userData}
          setUserData={setUserData}
          {...(error.confirmPassword && {
            error: true,
            helperText: "password doesn't match",
          })}
        />
        <Checkbox
          name="checkbox"
          label="accept terms and condition"
          userData={userData}
          setUserData={setUserData}
        />
        <Button type="submit">Sign Up</Button>
        <AuthType messageType="Log In">Already have an account!</AuthType>
      </AuthLayout>
    </>
  );
}

export default RegistrationPage;
