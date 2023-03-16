import React, { useContext } from "react";

// import LoginContext from "../../store/LoginContext/login-context";
import IncomeContext from "../../store/ExpenseContext/Income/income-context";
// import ExpenditureContext from "../../store/ExpenseContext/Expenditure/expenditure-context";
import axios from "axios";

let flag = true;

const StoredExpenses = () => {
  //   const authCtx = useContext(LoginContext);
  const incomeCtx = useContext(IncomeContext);
  //   const expenditureCtx = useContext(ExpenditureContext);

  if (flag) {
    axios
      .get(
        "https://expensetracker-1d431-default-rtdb.firebaseio.com/income.json"
      )
      .then((res) => {
        //   console.log(res.data.updatedIncomes);
        flag = false;
        res.data.updatedIncomes.map((income) => {
          incomeCtx.incomeStored(income);
        });
      });
  }
  return <></>;
};

export default StoredExpenses;
