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
    let updatedIncomes;
    let updatedTotalIncome;
    updatedIncomes = state.incomes.concat(action.income);
    updatedTotalIncome = state.totalIncome + Number(action.income.income);

    axios
      .put(
        "https://expensetracker-1d431-default-rtdb.firebaseio.com/income.json",
        {
          updatedIncomes,
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data.updatedIncomes);
      })
      .catch((error) => {
        console.log(error);
      });

    return {
      incomes: updatedIncomes,
      totalIncome: updatedTotalIncome,
      editIncome: state.editIncome,
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

    axios
      .put(
        "https://expensetracker-1d431-default-rtdb.firebaseio.com/income.json",
        {
          updatedIncomes,
        }
      )
      .catch((error) => {
        console.log(error);
      });

    return {
      incomes: updatedIncomes,
      totalIncome: updatedTotalIncome,
      editIncome: state.editIncome,
    };
  }

  if (action.type === "RECEIVED") {
    let updatedIncomes;
    let updatedTotalIncome;
    // console.log(action.income);
    updatedIncomes = state.incomes.concat(action.income);
    updatedTotalIncome = state.totalIncome + Number(action.income.income);

    return {
      incomes: updatedIncomes,
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
