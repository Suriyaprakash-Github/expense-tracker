import React from "react";

const IncomeContext = React.createContext({
  incomes: [],
  totalIncome: 0,
  editArray: [],
  addIncome: (income) => {},
  removeIncome: (id) => {},
  incomeStored: (item) => {},
  editIncome: (income) => {},
});

export default IncomeContext;
