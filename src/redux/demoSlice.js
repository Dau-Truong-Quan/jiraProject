import { createSlice } from "@reduxjs/toolkit";
import { number } from "yup";

let initialState = {
  number: 10,
};

export const demoSlice = createSlice({
  name: "demoSlice",
  initialState,
  reducers: {
    tangSoLuong: (state, { payload }) => {
      console.log(number);
    },
    giamSoLuong: (state, { payload }) => {
      state.number -= 1;
    },
  },
});

export const { tangSoLuong, giamSoLuong } = demoSlice.actions;

export default demoSlice.reducer;

// gioi thieu ban than
