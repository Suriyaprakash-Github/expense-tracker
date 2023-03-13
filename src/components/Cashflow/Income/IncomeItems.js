import React, { useContext } from "react";
import IncomeContext from "../../../store/ExpenseContext/Income/income-context";

const IncomeItems = (props) => {
  const incomeCtx = useContext(IncomeContext);
  console.log(incomeCtx.incomes);
  const incomes = incomeCtx.incomes.map((income) => {
    return (
      <div key={Math.random()}>
        <p>Title: {income.title}</p>
        <p>Income: {income.income}</p>
      </div>
    );
  });
  return (
    <>
      <div>{incomes}</div>
    </>
  );
};

export default IncomeItems;
