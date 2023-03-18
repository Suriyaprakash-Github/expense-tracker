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

  return (
    <>
      <div className={classes.mainIncomeDiv}>
        <h2>{incomeDetails}</h2>

        <table>
          <thead>
            <tr>
              <th>Income</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {incomeCtx.incomes.map((income) => {
              return (
                <>
                  <tr>
                    <td> {income.title}</td>
                    <td>{income.description}</td>
                    <td> {income.income}</td>

                    <td>
                      <img
                        src={trashImage}
                        onClick={() => deleteHandler(income)}
                        alt="delete"
                      />
                    </td>
                    <td>
                      <img
                        src={editImage}
                        onClick={() => editHandler(income)}
                        alt="delete"
                      />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default IncomeItems;
