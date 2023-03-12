import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import Profile from "./pages/Profile";
import UpdateProfile from "./components/Update/UpdateProfile";
import PasswordReset from "./components/PasswordReset/passwordReset";

import Verify from "./components/Verification/Verify";
import NavBar from "./components/Layout/Header/NavBar";

function App() {
  return (
    <>
      <div className="app">
        <NavBar />

        <Routes>
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/updateprofile" exact element={<UpdateProfile />} />
          <Route path="/verify" exact element={<Verify />} />
          <Route path="/reset" exact element={<PasswordReset />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
