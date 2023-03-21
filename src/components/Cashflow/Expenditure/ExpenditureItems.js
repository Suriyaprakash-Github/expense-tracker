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
  // const totalExpenditure = useSelector(
  //   (state) => state.expenditure.totalExpenditure
  // );
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
    // let expToEdit = exp;
    if (window.confirm("Are You Sure?")) {
      dispatch(expenditureActions.editExpenditure(exp));
      history("/editexpenditure");
    }
  };

  return (
    <>
      <div className={classes.mainIncomeDiv}>
        <h2>{expenditureDetails}</h2>
        <table>
          <thead>
            <tr>
              <th>Expenditure</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {expenditure.map((expenditure) => {
              return (
                <>
                  <tr>
                    <td> {expenditure.title}</td>
                    <td>{expenditure.description}</td>
                    <td> {expenditure.expenditure}</td>

                    <td>
                      <img
                        src={trashImage}
                        onClick={() => deleteHandler(expenditure)}
                        alt="delete"
                      />
                    </td>
                    <td>
                      <img
                        src={editImage}
                        onClick={() => editHandler(expenditure)}
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

export default ExpenditureItems;
