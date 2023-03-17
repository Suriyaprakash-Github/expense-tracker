import { createSlice, configureStore } from "@reduxjs/toolkit";

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
      state.expenditures = state.expenditures.concat(action.payload);
    },
    removeExpenditures(state, action) {
      const toRemove = state.expenditures.findIndex(
        (expenditure) => expenditure.id === action.expenditure.id
      );
      state.expenditures = state.expenditures.splice(toRemove, 1);
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
