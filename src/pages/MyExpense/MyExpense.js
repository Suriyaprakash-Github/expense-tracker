import React from "react";
import { Link } from "react-router-dom";
import ExpenditureForm from "../../components/Cashflow/Expenditure/ExpenditureForm";
import ExpenditureItems from "../../components/Cashflow/Expenditure/ExpenditureItems";
import IncomeForm from "../../components/Cashflow/Income/IncomeForm";
import IncomeItems from "../../components/Cashflow/Income/IncomeItems";

import classes from "./MyExpense.module.css";

const MyExpense = () => {
  // to filter expenses
  // const indexNeeded = expenditureCtx.expenditures.filter((exp) => {
  //   return exp.title === "Savings";
  // });
  // console.log("array", indexNeeded);

  return (
    <>
      <div>
        <div className={classes.dashboard}>
          <div className={classes.sideBar}>
            <Link>Summary</Link>
            <Link to="/incomes">Incomes</Link>
            <Link>Expenditures</Link>
            <Link>Calender</Link>
            <Link>Feedbackfdcgjhmkl,;.</Link>
          </div>
          <div className={classes.dashboard_content}>
            <div className={classes.sideBar}>
              <ul>
                <li>Summary</li>
                <li>Incomes</li>
                <li>Expenditures</li>
                <li>Calender</li>
                <li>Feedbackfdcgjhmkl,;.</li>
              </ul>
            </div>
            <div className={classes.formDiv}>
              <div>
                <IncomeForm />
              </div>
              <div>
                <ExpenditureForm />
              </div>
            </div>
            <div className={classes.expInc_container}>
              <IncomeItems />
              <ExpenditureItems />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyExpense;
