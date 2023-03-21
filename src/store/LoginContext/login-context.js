import React from "react";

const LoginContext = React.createContext({
  token: "",
  isLoggedIn: false,
  email: "",
  localId: "",
  verified: false,
  subscribed: false,
  login: (token) => {},
  logout: () => {},
  premium: () => {},
});

export default LoginContext;
