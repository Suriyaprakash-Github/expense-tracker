import React from "react";
import { useDispatch } from "react-redux";
import { expenditureActions } from "../../../store/ExpenseContext/Expenditure/index";
import classes from "./ExpenditureItem.module.css";
import trashImage from "../../../assets/trash.png";
import editImage from "../../../assets/edit.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ExpenditureItems = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const expenditure = useSelector((state) => state.expenditure.expenditures);
  const totalExpenditure = useSelector(
    (state) => state.expenditure.totalExpenditure
  );
  let expenditureDetails = "";
  if (expenditure.length === 0) {
    expenditureDetails = "add expenditures to show";
  } else expenditureDetails = "your expenditure Details";

  const deleteHandler = (exp) => {
    if (window.confirm("Are You Sure?!")) {
      dispatch(expenditureActions.removeExpenditures(exp));
    }
  };

  const editHandler = (exp) => {
    let expToEdit = exp;
    console.log(expToEdit);
    if (window.confirm("Are You Sure?")) {
      dispatch(expenditureActions.editExpenditure(exp));
      history("/editexpenditure");
    }
  };

  const expenditures = expenditure.map((expenditure) => {
    return (
      <div key={Math.random()} className={classes.showIncome}>
        <p>
          {expenditure.title}
          <img
            src={trashImage}
            onClick={() => deleteHandler(expenditure)}
            alt="delete"
          />
          <img
            src={editImage}
            onClick={() => editHandler(expenditure)}
            alt="delete"
          />
        </p>
        <p>Amount: {expenditure.expenditure}</p>
        <p>Description:{expenditure.description}</p>
      </div>
    );
  });
  return (
    <>
      <div className={classes.mainIncomeDiv}>
        <h2>{expenditureDetails}</h2>
        {expenditures}
        <p> Total Expenditure: {totalExpenditure}</p>
      </div>
    </>
  );
};

export default ExpenditureItems;
