import React from "react";

const IncomeContext = React.createContext({
  incomes: [],
  totalIncome: 0,
  addIncome: (income) => {},
  removeIncome: (id) => {},
});

export default IncomeContext;
