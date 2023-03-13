import React from "react";

const ExpenditureContext = React.createContext({
  expenditures: [],
  totalExpenditure: 0,
  addExpenditure: (expenditure) => {},
  removeExpenditures: (id) => {},
});

export default ExpenditureContext;
