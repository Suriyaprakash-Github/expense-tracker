import React, { useState } from "react";
import LoginContext from "./login-context";

const LoginProvider = (props) => {
  const initialEmail = localStorage.getItem("email");
  const initialToken = localStorage.getItem("token");

  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);
  const [subscribed, setSubscribed] = useState(null);
  const userIsLoggedIn = !!token;

  const premiumHandler = () => {
    setSubscribed(!null);
  };

  const loginHandler = (token, email) => {
    setToken(token);
    setEmail(email);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  };

  const logoutHandler = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    email: email,
    verified: false,
    subscribed: subscribed,
    login: loginHandler,
    logout: logoutHandler,
    premium: premiumHandler,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
