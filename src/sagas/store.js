import { applyMiddleware, combineReducers, createStore } from "redux";

import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./rootSaga";
import { ProjectCategoryRedux } from "./reducer/ProjectCategoryRedux";
import { Pro } from "./reducer/ProjectCategoryRedux";
import { ProjectListRedux } from "./reducer/ProjectCyberBugReducer";
import { DrawerCycberbugReducer } from "./reducer/DrawerCycberBugReducer";
import { DetailProject } from "./reducer/ProjectReducer";
import { UserCyberBugReducer } from "./reducer/UserCyberBugReducer";
import { TaskTypeReducer } from "./reducer/TaskTypeReducer";
import { PriorityReducer } from "./reducer/PriorityReducer";
const middleSaga = createSagaMiddleware();

const rootReducer = combineReducers({
  rootSaga,
  UserCyberBugReducer,
  ProjectCategoryRedux,
  ProjectListRedux,
  DrawerCycberbugReducer,
  DetailProject,
  TaskTypeReducer,
  PriorityReducer,
});

const store = createStore(rootReducer, applyMiddleware(middleSaga));
middleSaga.run(rootSaga);
export default store;
