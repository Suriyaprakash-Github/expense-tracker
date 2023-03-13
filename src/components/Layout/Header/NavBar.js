import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import LoginContext from "../../../store/LoginContext/login-context";

import classes from "./NavBar.module.css";

const NavBar = () => {
  const authCtx = useContext(LoginContext);
  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.navbar_div}>
          <NavLink to="/" className={classes.navbar_links}>
            Expense Tracker
          </NavLink>
        </div>
        <div className={classes.navbar_div}>
          <NavLink to="/" className={classes.navbar_links}>
            Home
          </NavLink>
          {authCtx.isLoggedIn ? (
            <>
              <NavLink to="/myexpense" className={classes.navbar_links}>
                My Expenses
              </NavLink>
              <NavLink to="/profile" className={classes.navbar_links}>
                Profile
              </NavLink>
              <NavLink
                to="/"
                className={classes.navbar_links}
                onClick={logoutHandler}
              >
                Logout
              </NavLink>
            </>
          ) : (
            <NavLink to="/signup" className={classes.navbar_links}>
              Sign Up
            </NavLink>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
