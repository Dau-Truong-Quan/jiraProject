import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TOKEN_CYBERSOFT, USER_LOGIN } from "./configURL";
import { userService } from "./userService";
let initialState = {
  user: null,
  loading: false,
};

export let setUserLoginService = createAsyncThunk(
  "userSlice/fetchDataLogin",
  async (dataLogin) => {
    let result = await userService.dangNhap(dataLogin);

    localStorage.setItem(TOKEN_CYBERSOFT, result.data.content.accessToken);
    localStorage.setItem(USER_LOGIN, JSON.stringify(result.data.content));
    return result.data.content;
  }
);

const userSlice = createSlice({
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

export const { setUserLogin } = userSlice.actions;

export default userSlice.reducer;
