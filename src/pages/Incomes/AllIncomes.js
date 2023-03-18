import React from "react";
import classes from "./AllIncomes.module.css";

import IncomeItems from "../../components/Cashflow/Income/IncomeItems";
import SideBar from "../../components/Layout/SideBar/SideBar";

const AllIncomes = () => {
  // to filter expenses
  // const indexNeeded = expenditureCtx.expenditures.filter((exp) => {
  //   return exp.title === "Savings";
  // });
  // console.log("array", indexNeeded);

  return (
    <>
      <div className={classes.dashboard}>
        <div className={classes.sideBar}>
          <SideBar />
        </div>
        <div className={classes.dashboard_content}>
          <IncomeItems />
        </div>
      </div>
    </>
  );
};

export default AllIncomes;
