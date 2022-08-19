import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "../service/userService";

let initialState = {
  user: null,
  loading: false,
};

export let setUserLoginService = createAsyncThunk(
  "userSlice/fetchDataLogin",
  async (dataLogin) => {
    let result = await userService.dangNhap(dataLogin);

    return result.data.content;
  }
);

const CyberBugLoginReduxToolkit = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [setUserLoginService.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
  },
});

export const { setUserLogin } = CyberBugLoginReduxToolkit.actions;

export default CyberBugLoginReduxToolkit.reducer;
