import React, { useContext } from "react";
import Expenditure from "../components/Cashflow/Expenditure/Expenditure";
import ExpenditureItems from "../components/Cashflow/Expenditure/ExpenditureItems";
import Income from "../components/Cashflow/Income/Income";
import IncomeItems from "../components/Cashflow/Income/IncomeItems";
import ExpenditureContext from "../store/ExpenseContext/Expenditure/expenditure-context";
import IncomeContext from "../store/ExpenseContext/Income/income-context";

const MyExpense = () => {
  const incomeCtx = useContext(IncomeContext);
  const expenditureCtx = useContext(ExpenditureContext);
  // to conditionally show h2
  let incomeDetails = "";
  if (incomeCtx.incomes.length === 0) {
    incomeDetails = "add incomes to show";
  } else incomeDetails = "your Income Details";
  let expenditureDetails = "";
  if (expenditureCtx.expenditures.length === 0) {
    expenditureDetails = "add expenditures to show";
  } else expenditureDetails = "your expenditure Details";

  return (
    <>
      <div>
        <div>
          <h2>{incomeDetails}</h2>
          <IncomeItems />

          {incomeCtx.totalIncome}
        </div>
        <div>
          <h2>{expenditureDetails}</h2>
          <ExpenditureItems />
          {expenditureCtx.totalExpenditure}
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
