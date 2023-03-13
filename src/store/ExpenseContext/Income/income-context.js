import React from "react";

const IncomeContext = React.createContext({
  incomes: [],
  addIncome: (income) => {},
  removeIncome: (id) => {},
});

export default IncomeContext;
