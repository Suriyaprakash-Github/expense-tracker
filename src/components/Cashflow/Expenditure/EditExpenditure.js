import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { expenditureActions } from "../../../store/ExpenseContext/Expenditure/index";

const EditExpenditure = (props) => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const expToEdit = useSelector((state) => state.expenditure.editExp);
  console.log(expToEdit);

  const expenditureName = expToEdit.title;
  const expenditureAmount = expToEdit.expenditure;
  const expenditureDescription = expToEdit.description;

  const enteredExpenditure = useRef();
  const enteredExpenditureAmount = useRef();
  const enteredDescription = useRef();

  const addExpenditureHandler = (e) => {
    e.preventDefault();
    let exp = {
      id: Math.random(),
      title: enteredExpenditure.current.value,
      expenditure: enteredExpenditureAmount.current.value,
      description: enteredDescription.current.value,
    };
    dispatch(expenditureActions.addExpenditure(exp));
    dispatch(expenditureActions.removeExpenditures(expToEdit));
    history("/myexpense");
  };

  return (
    <>
      <h1>Add Incomes</h1>

      <form onSubmit={addExpenditureHandler}>
        <label htmlFor="expenditure">Expenditure Category: </label>

        <select
          id="expenditure"
          ref={enteredExpenditure}
          defaultValue={expenditureName}
          required
        >
          <option value="">Choose an Expenditure</option>
          <option value="Housing Expenses">Housing Expenses</option>
          <option value="Travel Expenses">Travel Expenses</option>
          <option value="Food Expenses">Food Expenses</option>
          <option value="Personal Care Expenses">Personal Care Expenses</option>
          <option value="Entertainment Expenses">Entertainment Expenses</option>
          <option value="Health Care Expenses">Health Care Expenses</option>
          <option value="Clothing Expenses">Clothing Expenses</option>
          <option value="Education Expenses">Education Expenses</option>
          <option value="Debt Payments">Debt Payments</option>
          <option value="Savings">Savings</option>
        </select>

        <label htmlFor="incomeAmount">Income Amount: </label>
        <input
          type="number"
          id="incomeAmount"
          defaultValue={expenditureAmount}
          ref={enteredExpenditureAmount}
          required
        />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          defaultValue={expenditureDescription}
          ref={enteredDescription}
        />
        <button type="submit"> Add Expenditure </button>
      </form>
    </>
  );
};

export default EditExpenditure;
