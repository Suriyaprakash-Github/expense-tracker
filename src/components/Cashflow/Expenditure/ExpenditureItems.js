import React, { useContext } from "react";
import ExpenditureContext from "../../../store/ExpenseContext/Expenditure/expenditure-context";
import classes from "./ExpenditureItem.module.css";
import { useSelector } from "react-redux";

const ExpenditureItems = () => {
  const expenditureCtx = useContext(ExpenditureContext);
  const expenditure = useSelector((state) => state.expenditure.expenditures);

  let expenditureDetails = "";
  if (expenditure.length === 0) {
    expenditureDetails = "add expenditures to show";
  } else expenditureDetails = "your expenditure Details";

  console.log(expenditure);
  const expenditures = expenditure.map((expenditure) => {
    return (
      <div key={Math.random()} className={classes.showIncome}>
        <p>{expenditure.title}</p>
        <p>Amount: {expenditure.expenditure}</p>
        <p>Description:{expenditure.description}</p>
      </div>
    );
  });
  return (
    <>
      <div className={classes.mainIncomeDiv}>
        <h2>{expenditureDetails}</h2>
        {expenditures}
        <p> Total Expenditure: {expenditureCtx.totalExpenditure}</p>
      </div>
    </>
  );
};

export default ExpenditureItems;
