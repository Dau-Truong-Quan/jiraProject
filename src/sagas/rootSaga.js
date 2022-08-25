import axios from "axios";
import { all } from "@redux-saga/core/effects";
import * as Cyberbug from "./CyberBugs/UserCyberBugSaga";
import * as ProjectCategory from "./CyberBugs/ProjectCategorySage";
import * as ProjectSaga from "./CyberBugs/ProjectSaga";
export function* rootSaga() {
  yield all([
    Cyberbug.theoDoiSignin(),
    Cyberbug.theoDoigetUser(),
    Cyberbug.theoDoiremoveUserProjectSaga(),
    Cyberbug.theoDoiaddUserProjectSaga(),
    ProjectCategory.theodoiGetAllCategory(),
    ProjectSaga.theoDoicreateProjectSaga(),
    ProjectSaga.theoDoigetListProjectSaga(),
    ProjectSaga.theoDoiupdateProjectSaga(),
    ProjectSaga.theoDoideleteProjectSaga(),
    ProjectSaga.theoDoigetProjectDetail(),
  ]);
}
