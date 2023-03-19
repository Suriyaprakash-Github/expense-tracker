import React, { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import IncomeContext from "../../../store/ExpenseContext/Income/income-context";
import LoginContext from "../../../store/LoginContext/login-context";

const EditIncome = (props) => {
  const incomeCtx = useContext(IncomeContext);
  const authCtx = useContext(LoginContext);
  const history = useNavigate();

  const incomeName = incomeCtx.editArray.title;
  const incomeAmount = incomeCtx.editArray.income;
  const incomeDescription = incomeCtx.editArray.description;

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
    incomeCtx.removeIncome(incomeCtx.editArray);
    history("/myexpense");
  };

  return (
    <>
      <h1>Add Incomes</h1>

      <form onSubmit={addIncomeHandler}>
        <label htmlFor="income">Income Category: </label>
        <input
          type="text"
          id="income"
          defaultValue={incomeName}
          ref={enteredIncome}
        />

        <label htmlFor="incomeAmount">Income Amount: </label>
        <input
          type="number"
          id="incomeAmount"
          defaultValue={incomeAmount}
          ref={enteredIncomeAmount}
          required
        />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          defaultValue={incomeDescription}
          ref={enteredDescription}
        />
        <button type="submit"> Add Income </button>
      </form>
    </>
  );
};

export default EditIncome;
