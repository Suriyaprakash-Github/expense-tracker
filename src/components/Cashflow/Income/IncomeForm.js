import React, { useContext, useRef } from "react";
import IncomeContext from "../../../store/ExpenseContext/Income/income-context";
import LoginContext from "../../../store/LoginContext/login-context";
import classes from "./IncomeForm.module.css";

const IncomeForm = (props) => {
  const authCtx = useContext(LoginContext);
  const incomeCtx = useContext(IncomeContext);
  const enteredIncome = useRef();
  const enteredIncomeAmount = useRef();
  const enteredDescription = useRef();

  const addIncomeHandler = (e) => {
    e.preventDefault();
    incomeCtx.addIncome({
      id: Math.random(),
      email: authCtx.email.replace(".", "").replace("@", ""),
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
      <div className={classes.incomeForm_div}>
        <h1>Add Income</h1>

        <form onSubmit={addIncomeHandler}>
          <div>
            <label htmlFor="income">Income Category: </label>
            <input type="text" id="income" ref={enteredIncome} required />
          </div>
          <div>
            <label htmlFor="incomeAmount">Income Amount: </label>
            <input
              type="number"
              id="incomeAmount"
              ref={enteredIncomeAmount}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input type="text" id="description" ref={enteredDescription} />
          </div>
          <button type="submit"> Add Income </button>
        </form>
      </div>
    </>
  );
};

export default IncomeForm;
