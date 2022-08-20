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
import {
  CREATE_PROJECT_SAGA,
  USER_SIGN_API,
} from "../../constants/CyberBugs/CyberBug";
import { cyberbugsService } from "../../services/cyberbugsService";
import { TOKEN_CYBERSOFT, USER_LOGIN } from "../../services/configURL";
import { history } from "../../util/lib/history";
function* createProjectSaga(action) {
  yield delay(500);
  try {
    const { data, status } = yield cyberbugsService.createProject(
      action.newProject
    );

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

export function* theoDoicreateProjectSaga() {
  yield takeLatest(CREATE_PROJECT_SAGA, createProjectSaga);
}
