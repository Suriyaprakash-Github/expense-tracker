import React, { useContext } from "react";
import IncomeContext from "../../../store/ExpenseContext/Income/income-context";
import classes from "./IncomeItem.module.css";
import trashImage from "../../../assets/trash.png";
import editImage from "../../../assets/edit.png";
import { useNavigate } from "react-router-dom";

const IncomeItems = (props) => {
  const incomeCtx = useContext(IncomeContext);
  const history = useNavigate();

  let incomeDetails = "";
  if (incomeCtx.incomes.length === 0) {
    incomeDetails = "add incomes to show";
  } else incomeDetails = "your Income Details";

  const deleteHandler = (income) => {
    if (window.confirm("Are You Sure?!")) {
      incomeCtx.removeIncome(income);
    }
  };

  const editHandler = (income) => {
    let incomeToEdit = income;
    if (window.confirm("Are You Sure?")) {
      incomeCtx.editIncome(incomeToEdit);
      history("/editIncome");
    }
  };

  const incomes = incomeCtx.incomes.map((income) => {
    return (
      <div key={Math.random()} className={classes.showIncome}>
        <p>
          {income.title}
          <img
            src={trashImage}
            onClick={() => deleteHandler(income)}
            alt="delete"
          />
          <img
            src={editImage}
            onClick={() => editHandler(income)}
            alt="delete"
          />
        </p>

        <p>Amount: {income.income}</p>
        <p>Description:{income.description}</p>
      </div>
    );
  });
  return (
    <>
      <div className={classes.mainIncomeDiv}>
        <h2>{incomeDetails}</h2>
        {incomes}
        <p>Total Income: Rs. {incomeCtx.totalIncome}</p>
      </div>
    </>
  );
};

export default IncomeItems;
