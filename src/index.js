import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import LoginProvider from "./store/LoginContext/LoginProvider";
import IncomeProvider from "./store/ExpenseContext/Income/IncomeProvider";
import expenditureStore from "./store/ExpenseContext/Expenditure/index";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LoginProvider>
    <IncomeProvider>
      <Provider store={expenditureStore}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </IncomeProvider>
  </LoginProvider>
);
