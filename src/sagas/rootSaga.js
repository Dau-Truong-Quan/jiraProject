import axios from "axios";
import { all } from "@redux-saga/core/effects";
import * as Cyberbug from "./CyberBugs/UserCyberBugSaga";
import * as ProjectCategory from "./CyberBugs/ProjectCategorySage";
import * as ProjectSaga from "./CyberBugs/ProjectSaga";
import * as TaskTypeSaga from "./CyberBugs/TaskTypeSaga";
import * as PrioritySaga from "./CyberBugs/PrioritySaga";
import * as TaskSaga from "./CyberBugs/TaskSaga";
import * as StatusSaga from "./CyberBugs/StatusSaga";
export function* rootSaga() {
  yield all([
    Cyberbug.theoDoiSignin(),
    Cyberbug.theoDoigetUser(),
    Cyberbug.theoDoiremoveUserProjectSaga(),
    Cyberbug.theoDoiaddUserProjectSaga(),
    Cyberbug.theoDoigetUserByProjectId(),
    ProjectCategory.theodoiGetAllCategory(),
    ProjectSaga.theoDoicreateProjectSaga(),
    ProjectSaga.theoDoigetListProjectSaga(),
    ProjectSaga.theoDoiupdateProjectSaga(),
    ProjectSaga.theoDoideleteProjectSaga(),
    ProjectSaga.theoDoigetProjectDetail(),
    ProjectSaga.theodoigetAllProject(),
    TaskTypeSaga.theodoigetAllTaskTypeSaga(),
    PrioritySaga.theodoigetAllPriority(),
    TaskSaga.theodoicreateTaskSaga(),
    StatusSaga.theodoigetAllStatus(),
  ]);
}
