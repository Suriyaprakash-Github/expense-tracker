import React from "react";

const LoginContext = React.createContext({
  token: "",
  isLoggedIn: false,
  email: "",
  verified: false,
  login: (token) => {},
  logout: () => {},
});

export default LoginContext;
