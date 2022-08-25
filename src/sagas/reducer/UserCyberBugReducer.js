import { USER_LOGIN } from "../../services/configURL";

let usLogin = {};

if (localStorage.getItem(USER_LOGIN)) {
  usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const stateDefault = {
  userLogin: usLogin,

  userSearch: [],
};
export const UserCyberBugReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      state.userLogin = action.userLogin;
    }
    case "GET_USER_SEARCH": {
      state.userSearch = action.userSearch;
    }
    default:
      return { ...state };
  }
};
