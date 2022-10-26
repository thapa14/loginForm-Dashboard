import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useAuth from "./Authorization/useAuthHook";
import RequireAuth from "./Authorization/RequireAuth";

// pages import
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";
import Registration from "./Pages/Registration";
import ResetPassword from "./Pages/ResetPassword";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";

const LoggedUserContext = createContext();
const SetLoggedUserContext = createContext();
const AuthContext = createContext();

function App() {
  // states
  const [LoggedUser, setLoggedUser] = useState({});
  const auth = useAuth();

  return (
    <>
      <AuthContext.Provider value={auth}>
        <LoggedUserContext.Provider value={LoggedUser}>
          <SetLoggedUserContext.Provider value={setLoggedUser}>
            <BrowserRouter>
              <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<Registration />} />
                <Route
                  path="/forgetPassword"
                  element={<ForgotPasswordPage />}
                />
                <Route
                  path="/dashboard"
                  element={
                    <RequireAuth>
                      <Dashboard />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/resetPassword"
                  element={
                    <RequireAuth>
                      <ResetPassword />
                    </RequireAuth>
                  }
                />
              </Routes>
            </BrowserRouter>
          </SetLoggedUserContext.Provider>
        </LoggedUserContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
export { LoggedUserContext, SetLoggedUserContext, AuthContext };
