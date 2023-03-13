import React, { useContext } from "react";
import ExpenditureContext from "../../../store/ExpenseContext/Expenditure/expenditure-context";

const ExpenditureItems = () => {
  const expenditureCtx = useContext(ExpenditureContext);
  console.log(expenditureCtx.expenditures);
  const expenditures = expenditureCtx.expenditures.map((expenditure) => {
    return (
      <div key={Math.random()}>
        <p>Title: {expenditure.title}</p>
        <p>Expenditure: {expenditure.expenditure}</p>
      </div>
    );
  });
  return (
    <>
      <div>{expenditures}</div>
    </>
  );
};

export default ExpenditureItems;
