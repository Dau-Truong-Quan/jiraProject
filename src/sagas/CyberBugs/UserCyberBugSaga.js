import axios from "axios";
import {
  call,
  delay,
  fork,
  takeEvery,
  takeLatest,
  put,
  select,
} from "@redux-saga/core/effects";
import { USER_SIGN_API } from "../../constants/CyberBugs/CyberBug";
import { cyberbugsService } from "../../services/cyberbugsService";
import { TOKEN_CYBERSOFT, USER_LOGIN } from "../../services/configURL";
import { history } from "../../util/lib/history";
import { userService2 } from "../../services/UserService";
function* signinSaga(action) {
  yield delay(500);
  try {
    const { data, status } = yield cyberbugsService.signinCyberBugs(
      action.userLogin
    );
    localStorage.setItem(TOKEN_CYBERSOFT, data.content.accessToken);
    localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));

    yield put({
      type: USER_LOGIN,
      userLogin: data.content,
    });

    // let history = yield select((state) => state.HistoryReducer.history);
    history.push("/");
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    } else if (error.request) {
      console.log("request");
    } else if (error.message) {
      console.log(error.message);
    }
  }
}

export function* theoDoiSignin() {
  yield takeLatest(USER_SIGN_API, signinSaga);
}
function* getUser(action) {
  yield delay(500);
  try {
    const { data, status } = yield userService2.getUser(action.keyword);
    yield put({
      type: "GET_USER_SEARCH",
      userSearch: data.content,
    });
    console.log(data);
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    } else if (error.request) {
      console.log("request");
    } else if (error.message) {
      console.log(error.message);
    }
  }
}

export function* theoDoigetUser() {
  yield takeLatest("GET_USER_API", getUser);
}
function* addUserProjectSaga(action) {
  yield delay(500);
  try {
    console.log(action.userProject);
    const { data, status } = yield userService2.assignUserProject(
      action.userProject
    );

    yield put({
      type: "GET_LIST_PROJECT_SAGA",
    });

    console.log(data);
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    } else if (error.request) {
      console.log("request");
    } else if (error.message) {
      console.log(error.message);
    }
  }
}

export function* theoDoiaddUserProjectSaga() {
  yield takeLatest("ADD_USER_PROJECT_SAGA", addUserProjectSaga);
}
function* removeUserProjectSaga(action) {
  yield delay(500);
  try {
    console.log(action.userProject);
    const { data, status } = yield userService2.deleteUserFromProject(
      action.userProject
    );

    yield put({
      type: "GET_LIST_PROJECT_SAGA",
    });

    console.log(data);
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    } else if (error.request) {
      console.log("request");
    } else if (error.message) {
      console.log(error.message);
    }
  }
}

export function* theoDoiremoveUserProjectSaga() {
  yield takeLatest("REMOVE_USER_PROJECT_SAGA", removeUserProjectSaga);
}
