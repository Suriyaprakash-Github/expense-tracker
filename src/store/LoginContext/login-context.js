import React from "react";

const LoginContext = React.createContext({
  token: "",
  isLoggedIn: false,
  email: "",
  login: (token) => {},
  logout: () => {},
});

export default LoginContext;
