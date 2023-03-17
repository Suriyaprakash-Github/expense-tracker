import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { expenditureActions } from "./../../store/ExpenseContext/Expenditure/index";

import IncomeContext from "../../store/ExpenseContext/Income/income-context";
import axios from "axios";

let flag = true;

const StoredExpenses = () => {
  const incomeCtx = useContext(IncomeContext);
  const dispatch = useDispatch();

  if (flag) {
    axios
      .get(
        "https://expensetracker-1d431-default-rtdb.firebaseio.com/income.json"
      )
      .then((res) => {
        flag = false;
        res.data.updatedIncomes.map((income) => {
          return incomeCtx.incomeStored(income);
        });
      });
  }
  if (flag) {
    axios
      .get(
        "https://expensetracker-1d431-default-rtdb.firebaseio.com/expenditure.json"
      )
      .then((res) => {
        flag = false;
        res.data.allExp.map((exp) => {
          // return incomeCtx.incomeStored(income);
          dispatch(expenditureActions.addExpenditure(exp));
        });
      });
  }

  return <></>;
};

export default StoredExpenses;
