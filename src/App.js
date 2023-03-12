import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import Welcome from "./pages/Welcome";
import UpdateProfile from "./components/Update/UpdateProfile";

import LoginProvider from "./store/LoginContext/LoginProvider";
import Verify from "./components/Verification/Verify";

function App() {
  return (
    <>
      <div className="app">
        <a href="/">
          <button>Home</button>
        </a>
        <a href="/signup">
          <button>Signup</button>
        </a>
        <a href="/welcome">
          <button>Welcome </button>
        </a>
        <LoginProvider>
          <Routes>
            <Route path="/welcome" exact element={<Welcome />}></Route>

            <Route path="/signup" exact element={<SignUp />}></Route>

            <Route
              path="/updateprofile"
              exact
              element={<UpdateProfile />}
            ></Route>

            <Route path="/verify" exact element={<Verify />}></Route>

            <Route path="/" exact element={<Home />}></Route>
          </Routes>
        </LoginProvider>
      </div>
    </>
  );
}

export default App;
