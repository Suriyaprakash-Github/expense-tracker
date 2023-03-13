import React from "react";

const ExpenditureContext = React.createContext({
  expenditures: [],
  addExpenditure: (expenditure) => {},
  removeExpenditures: (id) => {},
});

export default ExpenditureContext;
