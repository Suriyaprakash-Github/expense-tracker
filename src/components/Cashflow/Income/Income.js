import React, { useContext, useRef } from "react";
import IncomeContext from "../../../store/ExpenseContext/Income/income-context";

const Income = (props) => {
  const incomeCtx = useContext(IncomeContext);
  const enteredIncome = useRef();
  const enteredIncomeAmount = useRef();

  const addIncomeHandler = (e) => {
    e.preventDefault();
    incomeCtx.addIncome({
      id: Math.random(),
      title: enteredIncome.current.value,
      income: enteredIncomeAmount.current.value,
    });
    enteredIncome.current.value = "";
    enteredIncomeAmount.current.value = "";
  };

  return (
    <>
      <h1>Add Incomes</h1>

      <form onSubmit={addIncomeHandler}>
        <label htmlFor="income">Enter Your Income</label>
        <input type="text" id="income" ref={enteredIncome} required />

        <label htmlFor="incomeAmount">Enter Your Income Amount</label>
        <input
          type="text"
          id="incomeAmount"
          ref={enteredIncomeAmount}
          required
        />
        <button type="submit"> Add Income </button>
      </form>
    </>
  );
};

export default Income;
