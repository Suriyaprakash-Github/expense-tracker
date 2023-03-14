import React, { useContext, useRef } from "react";
import IncomeContext from "../../../store/ExpenseContext/Income/income-context";

const Income = (props) => {
  const incomeCtx = useContext(IncomeContext);
  const enteredIncome = useRef();
  const enteredIncomeAmount = useRef();
  const enteredDescription = useRef();

  const addIncomeHandler = (e) => {
    e.preventDefault();
    incomeCtx.addIncome({
      id: Math.random(),
      title: enteredIncome.current.value,
      income: enteredIncomeAmount.current.value,
      description: enteredDescription.current.value,
    });
    enteredIncome.current.value = "";
    enteredIncomeAmount.current.value = "";
    enteredDescription.current.value = "";
  };

  return (
    <>
      <h1>Add Incomes</h1>

      <form onSubmit={addIncomeHandler}>
        <label htmlFor="income">Income Category: </label>
        <input type="text" id="income" ref={enteredIncome} required />

        <label htmlFor="incomeAmount">Income Amount: </label>
        <input
          type="text"
          id="incomeAmount"
          ref={enteredIncomeAmount}
          required
        />
        <label htmlFor="description">Description: </label>
        <input type="text" id="description" ref={enteredDescription} />
        <button type="submit"> Add Income </button>
      </form>
    </>
  );
};

export default Income;
