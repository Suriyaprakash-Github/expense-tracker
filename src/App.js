import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import Welcome from "./pages/Welcome";
import UpdateProfile from "./components/Update/UpdateProfile";

import LoginProvider from "./store/LoginContext/LoginProvider";

function App() {
  return (
    <>
      <div className="app">
        <a href="/">
          <button>Home</button>
        </a>
        <LoginProvider>
          <Routes>
            <Route>
              <Route path="/welcome" exact element={<Welcome />}></Route>
            </Route>

            <Route>
              <Route path="/signup" exact element={<SignUp />}></Route>
            </Route>
            <Route>
              <Route
                path="/updateprofile"
                exact
                element={<UpdateProfile />}
              ></Route>
              <Route>
                <Route path="/" exact element={<Home />}></Route>
              </Route>
            </Route>
          </Routes>
        </LoginProvider>
      </div>
    </>
  );
}

export default App;
