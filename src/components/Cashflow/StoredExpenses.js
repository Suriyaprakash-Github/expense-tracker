import React, { useContext } from "react";

import IncomeContext from "../../store/ExpenseContext/Income/income-context";
import axios from "axios";

let flag = true;

const StoredExpenses = () => {
  const incomeCtx = useContext(IncomeContext);

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
  return <></>;
};

export default StoredExpenses;
