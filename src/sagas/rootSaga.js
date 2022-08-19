import axios from "axios";
import { all } from "@redux-saga/core/effects";
import * as Cyberbug from "./CyberBugs/UserCyberBugSaga";
import * as ProjectCategory from "./CyberBugs/ProjectCategorySage";
export function* rootSaga() {
  yield all([
    Cyberbug.theoDoiSignin(),
    ProjectCategory.theodoiGetAllCategory(),
  ]);
}
