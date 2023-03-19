import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { expenditureActions } from "./../../store/ExpenseContext/Expenditure/index";
import LoginContext from "../../store/LoginContext/login-context";
import IncomeContext from "../../store/ExpenseContext/Income/income-context";
import axios from "axios";

let flag = true;

const StoredExpenses = () => {
  const authCtx = useContext(LoginContext);
  const email = authCtx.email.replace(".", "").replace("@", "");
  const incomeCtx = useContext(IncomeContext);
  const dispatch = useDispatch();

  if (flag) {
    axios
      .get(
        `https://expensetracker-1d431-default-rtdb.firebaseio.com/${email}/income.json`
      )
      .then((res) => {
        flag = false;
        res.data.allIncomes.map((income) => {
          return incomeCtx.incomeStored(income);
        });
      });
  }
  if (flag) {
    axios
      .get(
        `https://expensetracker-1d431-default-rtdb.firebaseio.com/${email}/expenditure.json`
      )
      .then((res) => {
        flag = false;
        res.data.allExp.map((exp) =>
          dispatch(expenditureActions.addExpenditure(exp))
        );
      });
  }

  return <></>;
};

export default StoredExpenses;
