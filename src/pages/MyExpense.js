import React from "react";
import Expenditure from "../components/Cashflow/Expenditure/Expenditure";
import ExpenditureItems from "../components/Cashflow/Expenditure/ExpenditureItems";
import Income from "../components/Cashflow/Income/Income";
import IncomeItems from "../components/Cashflow/Income/IncomeItems";

import classes from "./MyExpense.module.css";

const MyExpense = () => {
  // to filter expenses
  // const indexNeeded = expenditureCtx.expenditures.filter((exp) => {
  //   return exp.title === "Savings";
  // });
  // console.log("array", indexNeeded);
  return (
    <>
      <div className={classes.expInc_container}>
        <div>
          <IncomeItems />
        </div>
        <div>
          <ExpenditureItems />
        </div>
      </div>
      <div>
        <Income />
        <Expenditure />
      </div>
    </>
  );
};

export default MyExpense;
