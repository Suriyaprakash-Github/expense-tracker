import React, { useReducer } from "react";
import IncomeContext from "./income-context";
import axios from "axios";

const defaultIncomeState = {
  incomes: [],
  totalIncome: 0,
  editArray: [],
};

const incomeReducer = (state, action) => {
  if (action.type === "ADD") {
    let allIncomes;
    let updatedTotalIncome;
    allIncomes = state.incomes.concat(action.income);
    updatedTotalIncome = state.totalIncome + Number(action.income.income);

    axios
      .put(
        `https://expensetracker-1d431-default-rtdb.firebaseio.com/${action.income.email}/income.json`,
        {
          allIncomes,
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data.allIncomes);
      })
      .catch((error) => {
        console.log(error);
      });

    return {
      incomes: allIncomes,
      totalIncome: updatedTotalIncome,
      editIncome: state.editIncome,
    };
  }
  if (action.type === "REMOVE") {
    let allIncomes;
    let updatedTotalIncome;
    const toRemove = state.incomes.findIndex(
      (income) => income.id === action.income.id
    );
    state.incomes.splice(toRemove, 1);
    allIncomes = [...state.incomes];
    updatedTotalIncome = state.totalIncome - Number(action.income.income);

    axios
      .put(
        `https://expensetracker-1d431-default-rtdb.firebaseio.com/${action.income.email}/income.json`,
        {
          allIncomes,
        }
      )
      .catch((error) => {
        console.log(error);
      });

    return {
      incomes: allIncomes,
      totalIncome: updatedTotalIncome,
      editIncome: state.editIncome,
    };
  }

  if (action.type === "RECEIVED") {
    let allIncomes;
    let updatedTotalIncome;
    // console.log(action.income);
    allIncomes = state.incomes.concat(action.income);
    updatedTotalIncome = state.totalIncome + Number(action.income.income);

    return {
      incomes: allIncomes,
      totalIncome: updatedTotalIncome,
      editIncome: state.editIncome,
    };
  }

  if (action.type === "EDIT") {
    let newEditIncome = action.income;
    console.log("from provider", newEditIncome);

    return {
      incomes: state.incomes,
      totalIncome: state.totalIncome,
      editArray: newEditIncome,
    };
  }
  return defaultIncomeState;
};

// Provider
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

  const incomeStoredHandler = (income) => {
    dispatchIncomeAction({ type: "RECEIVED", income: income });
  };

  const editIncomeHandler = (income) => {
    dispatchIncomeAction({ type: "EDIT", income: income });
  };

  const incomeValue = {
    incomes: incomeState.incomes,
    totalIncome: incomeState.totalIncome,
    editArray: incomeState.editArray,
    addIncome: addItemToIncomeHandler,
    removeIncome: removeItemFromIncomeHandler,
    incomeStored: incomeStoredHandler,
    editIncome: editIncomeHandler,
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
