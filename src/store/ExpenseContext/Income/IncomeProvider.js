import React from "react";
import IncomeContext from "./income-context";

const IncomeProvider = (props) => {
  const incomeValue = {
    incomes: [],
    addIncome: addIncomeHandler,
    removeIncome: removeIncomeHandler,
  };

  return (
    <>
      <IncomeContext.Provider value={incomeValue}>
        {props.children}
      </IncomeContext.Provider>
    </>
  );
};

export default IncomeProvider;
