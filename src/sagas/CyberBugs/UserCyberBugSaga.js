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
