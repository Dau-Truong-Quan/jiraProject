import { applyMiddleware, combineReducers, createStore } from "redux";

import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./rootSaga";
import { HistoryReducer } from "./history/HistoryRedux";
import { ProjectCategoryRedux } from "./reducer/ProjectCategoryRedux";
import { Pro } from "./reducer/ProjectCategoryRedux";
import { ProjectListRedux } from "./reducer/ProjectCyberBugReducer";
import { DrawerCycberbugReducer } from "./reducer/DrawerCycberBugReducer";
import { DetailProject } from "./reducer/ProjectReducer";
const middleSaga = createSagaMiddleware();

const rootReducer = combineReducers({
  rootSaga,
  HistoryReducer,
  ProjectCategoryRedux,
  ProjectListRedux,
  DrawerCycberbugReducer,
  DetailProject,
});

const store = createStore(rootReducer, applyMiddleware(middleSaga));
middleSaga.run(rootSaga);
export default store;
