import React, { useRef } from "react";
import classes from "./ExpenditureForm.module.css";
import { useDispatch } from "react-redux";
import { expenditureActions } from "../../../store/ExpenseContext/Expenditure/index";

const ExpenditureForm = (props) => {
  const dispatch = useDispatch();
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
    // console.log(exp);
    dispatch(expenditureActions.addExpenditure(exp));
  };

  return (
    <>
      <div className={classes.incomeForm_div}>
        <h1>Add Expenditure</h1>
        <form onSubmit={addExpenditureHandler}>
          <div>
            <label htmlFor="expenditure">Expenditure Category: </label>

            <select id="expenditure" ref={enteredExpenditure} required>
              <option value="">Choose an Expenditure</option>
              <option value="Housing Expenses">Housing Expenses</option>
              <option value="Travel Expenses">Travel Expenses</option>
              <option value="Food Expenses">Food Expenses</option>
              <option value="Personal Care Expenses">
                Personal Care Expenses
              </option>
              <option value="Entertainment Expenses">
                Entertainment Expenses
              </option>
              <option value="Health Care Expenses">Health Care Expenses</option>
              <option value="Clothing Expenses">Clothing Expenses</option>
              <option value="Education Expenses">Education Expenses</option>
              <option value="Debt Payments">Debt Payments</option>
              <option value="Savings">Savings</option>
            </select>
          </div>
          <div>
            <label htmlFor="expenditureAmount">Expenditure Amount: </label>
            <input
              type="number"
              id="expenditureAmount"
              ref={enteredExpenditureAmount}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input type="text" id="description" ref={enteredDescription} />
          </div>
          <button type="submit">Add Expenditure</button>
        </form>
      </div>
    </>
  );
};

export default ExpenditureForm;
