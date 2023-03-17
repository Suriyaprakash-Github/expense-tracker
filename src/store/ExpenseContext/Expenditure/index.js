import { createSlice, configureStore } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  expenditures: [],
  totalExpenditure: 0,
  editExp: [],
};

const expenditureSlice = createSlice({
  name: "expenditure",
  initialState: initialState,
  reducers: {
    addExpenditure(state, action) {
      let allExp;
      state.expenditures = state.expenditures.concat(action.payload);
      state.totalExpenditure =
        state.totalExpenditure + Number(action.payload.expenditure);
      allExp = state.expenditures;

      axios
        .put(
          "https://expensetracker-1d431-default-rtdb.firebaseio.com/expenditure.json",
          {
            allExp,
          }
        )
        .then((res) => {
          console.log(res);
          console.log(res.data.allExp);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    removeExpenditures(state, action) {
      let remainingExp;
      const toRemove = state.expenditures.findIndex(
        (expenditure) => expenditure.id === action.payload.id
      );
      state.expenditures.splice(toRemove, 1);
      remainingExp = [...state.expenditures];
      axios
        .put(
          "https://expensetracker-1d431-default-rtdb.firebaseio.com/expenditure.json",
          {
            remainingExp,
          }
        )
        .catch((error) => {
          console.log(error);
        });
    },

    editExpenditure(state, action) {
      state.editExp = action.expenditure;
    },
    expenditureStored(state, action) {},
  },
});

const expenditureStore = configureStore({
  reducer: { expenditure: expenditureSlice.reducer },
});

export const expenditureActions = expenditureSlice.actions;
export default expenditureStore;
