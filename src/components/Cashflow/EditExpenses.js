import React, { useRef } from "react";

const EditExpenses = (props) => {
  const enteredIncome = useRef();
  const enteredIncomeAmount = useRef();
  const enteredDescription = useRef();

  const addIncomeHandler = (e) => {
    e.prventDefault();
    console.log(enteredIncome, enteredIncomeAmount, enteredDescription);
  };
  return (
    <>
      <h1>Add Incomes</h1>

      <form onSubmit={addIncomeHandler}>
        <label htmlFor="income">Income Category: </label>
        <input
          type="text"
          id="income"
          ref={enteredIncome}
          value={props.title}
        />

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

export default EditExpenses;
