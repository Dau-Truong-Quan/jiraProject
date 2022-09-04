import "./App.css";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  Switch,
  useHistory,
  Navigate,
} from "react-router-dom";
import { HomeTemplate } from "./template/HomeTemplate/HomeTemplate";
import Login from "./template/Page/Login/Login";
import { LoginTemplate } from "./template/HomeTemplate/LoginTemplate";
import Form from "./template/Page/Home/Form";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { CycberBugTemplate } from "./template/HomeTemplate/CycberBugTemplate";
import CreateProject from "./template/Page/Cycberbug/CreateProject/CreateProject";

import ProjectManager from "./template/Page/ProjectManager/ProjectManager";
import DrawerCycberbug from "./HOC/CyberBug/DrawerCycberbug";
import IndexCycberbug from "./template/HomeTemplate/indexCycberbug";
import { USER_LOGIN } from "./services/configURL";
function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "ADD_HISTORY", history: history });
  }, []);
  const isLoggedIn = true;
  return (
    <>
      <DrawerCycberbug />
      <Switch>
        <LoginTemplate exact path="/login" Component={Login} />
        <CycberBugTemplate exact path="/" Component={ProjectManager} />

        {/* <Route path="/" element={isLoggedIn ? <Login /> : <></>} /> */}
        <CycberBugTemplate
          exact
          path="/projectManager/:idProduct"
          Component={IndexCycberbug}
        />
        <CycberBugTemplate
          exact
          path="/projectManager"
          Component={ProjectManager}
        />
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Login />
            ) : (
              <CycberBugTemplate exact path="/" Component={ProjectManager} />
            )
          }
        />
        <CycberBugTemplate
          exact
          path="/createProject"
          Component={CreateProject}
        />
      </Switch>
    </>
  );
}

export default App;
