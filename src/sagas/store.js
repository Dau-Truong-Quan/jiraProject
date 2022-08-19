import { applyMiddleware, combineReducers, createStore } from "redux";

import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./rootSaga";
import { HistoryReducer } from "./history/HistoryRedux";
import { ProjectCategoryRedux } from "./reducer/ProjectCategoryRedux";
const middleSaga = createSagaMiddleware();

const rootReducer = combineReducers({
  rootSaga,
  HistoryReducer,
  ProjectCategoryRedux,
});

const store = createStore(rootReducer, applyMiddleware(middleSaga));
middleSaga.run(rootSaga);
export default store;
