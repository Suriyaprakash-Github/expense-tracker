import React from "react";
import { Link } from "react-router-dom";
import ExpenditureForm from "../../components/Cashflow/Expenditure/ExpenditureForm";
import IncomeForm from "../../components/Cashflow/Income/IncomeForm";
import SideBar from "../../components/Layout/SideBar/SideBar";
import classes from "./MyExpense.module.css";

const MyExpense = () => {
  return (
    <>
      <div>
        <div className={classes.dashboard}>
          <div className={classes.sideBar}>
            <SideBar />
          </div>
          <div className={classes.dashboard_content}>
            <div className={classes.sideBar}>
              <SideBar />
            </div>
            <div className={classes.formDiv}>
              <div>
                <IncomeForm />
              </div>
              <div>
                <ExpenditureForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyExpense;
