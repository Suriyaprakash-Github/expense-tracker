import React, { useReducer } from "react";
import IncomeContext from "./income-context";

const defaultIncomeState = {
  incomes: [],
  totalIncome: 0,
};

const incomeReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedIncomes;
    let updatedTotalIncome;
    updatedIncomes = state.incomes.concat(action.income);
    updatedTotalIncome = state.totalIncome + Number(action.income.income);
    return {
      incomes: updatedIncomes,
      totalIncome: updatedTotalIncome,
    };
  }
  if (action.type === "REMOVE") {
    let updatedIncomes;
    let updatedTotalIncome;
    const toRemove = state.incomes.findIndex(
      (income) => income.id === action.income.id
    );
    state.incomes.splice(toRemove, 1);
    updatedIncomes = [...state.incomes];
    updatedTotalIncome = state.totalIncome - Number(action.income.income);
    return {
      incomes: updatedIncomes,
      totalIncome: updatedTotalIncome,
    };
  }
  return defaultIncomeState;
};
const IncomeProvider = (props) => {
  const [incomeState, dispatchIncomeAction] = useReducer(
    incomeReducer,
    defaultIncomeState
  );

  const addItemToIncomeHandler = (income) => {
    dispatchIncomeAction({ type: "ADD", income: income });
  };

  const removeItemFromIncomeHandler = (income) => {
    dispatchIncomeAction({ type: "REMOVE", income: income });
  };

  const incomeValue = {
    incomes: incomeState.incomes,
    totalIncome: incomeState.totalIncome,
    addIncome: addItemToIncomeHandler,
    removeIncome: removeItemFromIncomeHandler,
  };

  return (
    <>
      <IncomeContext.Provider value={incomeValue}>
        {props.children}
      </IncomeContext.Provider>
    </>
  );
};

export default IncomeProvider;
