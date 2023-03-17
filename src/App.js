import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import LoginContext from "./store/LoginContext/login-context";

import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import Profile from "./pages/Profile";
import UpdateProfile from "./components/Update/UpdateProfile";
import PasswordReset from "./components/PasswordReset/PasswordReset";

import Verify from "./components/Verification/Verify";
import NavBar from "./components/Layout/Header/NavBar";
import MyExpense from "./pages/MyExpense";
import StoredExpenses from "./components/Cashflow/StoredExpenses";
import EditIncome from "./components/Cashflow/Income/EditIncome";
import EditExpenditure from "./components/Cashflow/Expenditure/EditExpenditure";

function App() {
  const authCtx = useContext(LoginContext);
  return (
    <>
      <div className="app">
        <NavBar />

        <Routes>
          {authCtx.isLoggedIn ? (
            <Route path="/profile" exact element={<Profile />} />
          ) : (
            <Route path="/profile" exact element={<SignUp />} />
          )}

          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/updateprofile" exact element={<UpdateProfile />} />
          <Route path="/editIncome" exact element={<EditIncome />} />
          <Route path="/editexpenditure" exact element={<EditExpenditure />} />

          <Route path="/myexpense" exact element={<MyExpense />} />
          <Route path="/verify" exact element={<Verify />} />
          <Route path="/reset" exact element={<PasswordReset />} />

          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
      <StoredExpenses />
    </>
  );
}

export default App;
