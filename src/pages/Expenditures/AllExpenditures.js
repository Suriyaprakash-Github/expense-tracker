import React from "react";
import classes from "./AllExpenditures.module.css";
import SideBar from "../../components/Layout/SideBar/SideBar";
import ExpenditureItems from "../../components/Cashflow/Expenditure/ExpenditureItems";

const AllExpenditures = () => {
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
          <div className={classes.sideBar}>
            <SideBar />
          </div>
          <ExpenditureItems />
        </div>
      </div>
    </>
  );
};

export default AllExpenditures;
