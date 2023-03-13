import React from "react";
import ExpenditureContext from "./expenditure-context";

const ExpenditureProvider = (props) => {
  const expenditureValue = {
    expenditures: [],
    addExpenditure: addExpenditureHandler,
    removeExpenditure: removeExpenditureHandler,
  };

  return (
    <>
      <ExpenditureContext.Provider value={expenditureValue}>
        {props.children}
      </ExpenditureContext.Provider>
    </>
  );
};

export default ExpenditureProvider;
