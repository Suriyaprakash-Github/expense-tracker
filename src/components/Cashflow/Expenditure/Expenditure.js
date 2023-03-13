import React, { useRef, useContext } from "react";
import ExpenditureContext from "../../../store/ExpenseContext/Expenditure/expenditure-context";

const Expenditure = (props) => {
  const expenditureCtx = useContext(ExpenditureContext);
  const enteredExpenditure = useRef();
  const enteredExpenditureAmount = useRef();

  const addExpenditureHandler = (e) => {
    e.preventDefault();
    expenditureCtx.addExpenditure({
      id: Math.random(),
      title: enteredExpenditure.current.value,
      expenditure: enteredExpenditureAmount.current.value,
    });
    enteredExpenditure.current.value = "";
    enteredExpenditureAmount.current.value = "";
  };

  return (
    <>
      <div>
        <h1>Add Expenditures</h1>
        <form onSubmit={addExpenditureHandler}>
          <label htmlFor="expenditure">Enter Your Expenditure</label>
          <input
            type="text"
            id="expenditure"
            ref={enteredExpenditure}
            required
          />

          <label htmlFor="expenditureAmount">
            Enter Your Expenditure Amount
          </label>
          <input
            type="text"
            id="expenditureAmount"
            ref={enteredExpenditureAmount}
            required
          />
          <button type="submit">Add Expenditure</button>
        </form>
      </div>
    </>
  );
};

export default Expenditure;
