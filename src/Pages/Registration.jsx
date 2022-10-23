import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Checkbox } from "../Components/inputContainer";
import { AuthLayout, AuthType } from "../Components/layoutContainer";

const initialValue = {
  userName: "",
  email: "",
  password: "",
  checkbox: false,
  confirmPassword: "",
};

function RegistrationPage({ message }) {
  // states
  const history = useNavigate();
  const [userData, setUserData] = useState(initialValue);
  const [error, setError] = useState({});

  // form validation
  const validate = () => {
    let temp = {};
    temp.userName = userData.fullName ? "" : "This field can't be empty";
    temp.email = /.+@..+/.test(userData.email) ? "" : "Invalid Email";
    temp.password = userData.password.length > 2 ? "" : "Password is too short";
    temp.confirmPassword =
      userData.password === userData.confirmPassword
        ? ""
        : "Password doesn't match";
    setError(() => ({ ...temp }));
    return Object.values(temp).every((el) => el === "");
  };

  // form submition function
  const signUp = (e) => {
    const userDataToAdd = {
      fullName: userData.fullName,
      email: userData.email,
      password: userData.password,
      checkbox: userData.checkbox,
    };
    e.preventDefault();
    validate();
    if (!validate()) return;
    const userList = JSON.parse(window.localStorage.getItem("userList"));

    if (!userList) {
      window.localStorage.setItem("userList", JSON.stringify([userDataToAdd]));
      setUserData(initialValue);
      history("/login");
    } else {
      const isAvail = userList.find((user) => user.email === userData.email);

      if (!isAvail) {
        userList.push(userDataToAdd);
        window.localStorage.setItem("userList", JSON.stringify(userList));
        setUserData(initialValue);
        history("/login");
      } else {
        setError((prev) => ({
          ...prev,
          email: "Email already exist",
        }));
      }
    }
  };

  return (
    <>
      <AuthLayout
        title="Sign Up"
        navButton="Log In"
        message="login"
        onSubmit={signUp}
      >
        <Input
          id="user-name"
          label="Name"
          name="userName"
          userData={userData}
          setUserData={setUserData}
          {...(error.userName && {
            error: true,
            helperText: error.userName,
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
            helperText: error.email,
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
            helperText: error.password,
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
            helperText: error.confirmPassword,
          })}
        />
        <Checkbox
          name="checkbox"
          label="accept terms and condition"
          userData={userData.checkbox}
          setUserData={setUserData}
        />
        <Button type="submit">Sign Up</Button>
        <AuthType message="login" messageType="Log In">
          Already have an account!
        </AuthType>
      </AuthLayout>
    </>
  );
}

export default RegistrationPage;
