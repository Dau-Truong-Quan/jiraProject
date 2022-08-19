import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: {},
};

export const HistoryRedux = createSlice({
  name: "productList",
  initialState,
  reducers: {
    setHistory: (state, action) => {
      state.history = action.payload;
    },
    removeHistory: (state) => {
      state.history = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHistory, removeHistory } = HistoryRedux.actions;

export default HistoryRedux.reducer;
