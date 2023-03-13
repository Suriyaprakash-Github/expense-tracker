import React, { useState } from "react";
import IncomeContext from "./income-context";

const IncomeProvider = (props) => {
  const [incomes, setIncomes] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  const addIncomeHandler = (income) => {
    const addedIncome = incomes.concat(income);
    const incomeTotal = totalIncome + Number(income.income);
    setIncomes(addedIncome);
    setTotalIncome(incomeTotal);
  };

  const removeIncomeHandler = (id) => {};

  const incomeValue = {
    incomes: incomes,
    totalIncome: totalIncome,
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
