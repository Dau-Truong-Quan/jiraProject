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
import { projectService } from "../../services/ProjectService";
import { NotificationWithIcon } from "../../util/Notification/NotificationCycberbug";
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

function* getListProjectSaga(action) {
  yield delay(500);
  try {
    const { data, status } = yield cyberbugsService.getAllProduct();

    yield put({
      type: "GET_LIST_PROJECT",
      data: data.content,
    });
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

export function* theoDoigetListProjectSaga() {
  yield takeLatest("GET_LIST_PROJECT_SAGA", getListProjectSaga);
}

function* updateProjectSaga(action) {
  yield delay(500);
  try {
    const { data, status } = yield cyberbugsService.updateProject(
      action.projectUpdate
    );

    yield put({
      type: "GET_LIST_PROJECT",
    });
    yield put({
      type: "CLOSE_DRAWER",
    });
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

export function* theoDoiupdateProjectSaga() {
  yield takeLatest("UPDATE_PROJECT_SAGA", updateProjectSaga);
}

function* deleteProjectSaga(action) {
  try {
    const { data, status } = yield call(() =>
      projectService.deleteProject(action.idProject)
    );
    yield delay(500);
    NotificationWithIcon("success", "Delete successs");
    yield put({
      type: "GET_LIST_PROJECT",
    });
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

export function* theoDoideleteProjectSaga() {
  yield takeLatest("DELETE_PROJECT_SAGA", deleteProjectSaga);
}
