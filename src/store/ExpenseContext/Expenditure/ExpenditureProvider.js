import React, { useState } from "react";
import ExpenditureContext from "./expenditure-context";

const ExpenditureProvider = (props) => {
  const [expenditures, setExpenditures] = useState([]);
  const [totalExpenditure, setTotalExpenditure] = useState(0);

  const addExpenditureHandler = (expenditure) => {
    const addedExpenditure = expenditures.concat(expenditure);
    const expenditureTotal = totalExpenditure + Number(expenditure.expenditure);
    setExpenditures(addedExpenditure);
    setTotalExpenditure(expenditureTotal);
  };
  const removeExpenditureHandler = (id) => {};

  const expenditureValue = {
    expenditures: expenditures,
    totalExpenditure: totalExpenditure,
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
