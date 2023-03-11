import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route>
            <Route path="/welcome" exact element={<Welcome />}></Route>
          </Route>

          <Route>
            <Route path="/signup" exact element={<SignUp />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
