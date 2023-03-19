import React, { useContext } from "react";
import ExpenditureForm from "../../components/Cashflow/Expenditure/ExpenditureForm";
import IncomeForm from "../../components/Cashflow/Income/IncomeForm";
import SideBar from "../../components/Layout/SideBar/SideBar";
import classes from "./MyExpense.module.css";
import IncomeContext from "../../store/ExpenseContext/Income/income-context";
import StoredExpenses from "../../components/Cashflow/StoredExpenses";
import { useSelector } from "react-redux";

const MyExpense = () => {
  const incomeCtx = useContext(IncomeContext);
  const totalIncome = incomeCtx.totalIncome;
  const totalExpenditure = useSelector(
    (state) => state.expenditure.totalExpenditure
  );

  return (
    <>
      <div>
        <div className={classes.dashboard}>
          <div className={classes.sideBar}>
            <SideBar />
          </div>
          <div className={classes.dashboard_content}>
            <div className={classes.sideBar}>
              <SideBar />
            </div>
            <div></div>

            <div className={classes.formDiv}>
              <div>
                <IncomeForm />
                <p>Total Income: Rs.{totalIncome}</p>
              </div>
              <div>
                <ExpenditureForm />
                <p>Total Expenditure: Rs.{totalExpenditure}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StoredExpenses />
    </>
  );
};

export default MyExpense;
