import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import LoginProvider from "./store/LoginContext/LoginProvider";
import IncomeProvider from "./store/ExpenseContext/Income/IncomeProvider";
import ExpenditureProvider from "./store/ExpenseContext/Expenditure/ExpenditureProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LoginProvider>
    <IncomeProvider>
      <ExpenditureProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ExpenditureProvider>
    </IncomeProvider>
  </LoginProvider>
);
