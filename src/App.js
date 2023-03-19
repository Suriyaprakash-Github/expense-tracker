import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import LoginContext from "./store/LoginContext/login-context";

import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import UpdateProfile from "./components/Update/UpdateProfile";
import PasswordReset from "./components/PasswordReset/PasswordReset";

import Verify from "./components/Verification/Verify";
import NavBar from "./components/Layout/Header/NavBar";
import MyExpense from "./pages/MyExpense/MyExpense";
import EditIncome from "./components/Cashflow/Income/EditIncome";
import EditExpenditure from "./components/Cashflow/Expenditure/EditExpenditure";
import AllIncomes from "./pages/Incomes/AllIncomes";
import AllExpenditures from "./pages/Expenditures/AllExpenditures";

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
          <Route path="/incomes" exact element={<AllIncomes />} />
          <Route path="/expenditures" exact element={<AllExpenditures />} />

          <Route path="/reset" exact element={<PasswordReset />} />

          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
