import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../store/LoginContext/login-context";

const Welcome = () => {
  const authCtx = useContext(LoginContext);
  return (
    <>
      <h1>Welcome to Expense Tracker</h1>
      <Link to="/updateprofile">Update Profile</Link>
    </>
  );
};
export default Welcome;
