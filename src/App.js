import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import Welcome from "./pages/Welcome";
import UpdateProfile from "./components/Update/UpdateProfile";
import PasswordReset from "./components/PasswordReset/passwordReset";

import Verify from "./components/Verification/Verify";
import LoginContext from "./store/LoginContext/login-context";

function App() {
  const authCtx = useContext(LoginContext);
  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <>
      <div className="app">
        <a href="/">
          <button>Home</button>
        </a>
        {authCtx.isLoggedIn ? (
          <a href="/">
            <button onClick={logoutHandler}>Logout</button>
          </a>
        ) : (
          <a href="/signup">
            <button>Signup</button>
          </a>
        )}

        <a href="/welcome">
          <button>Welcome </button>
        </a>

        <Routes>
          <Route path="/welcome" exact element={<Welcome />}></Route>

          <Route path="/signup" exact element={<SignUp />}></Route>

          <Route
            path="/updateprofile"
            exact
            element={<UpdateProfile />}
          ></Route>

          <Route path="/verify" exact element={<Verify />}></Route>
          <Route path="/reset" exact element={<PasswordReset />}></Route>

          <Route path="/" exact element={<Home />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
