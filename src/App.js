import "./App.css";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  Switch,
  useHistory,
} from "react-router-dom";
import { HomeTemplate } from "./template/HomeTemplate/HomeTemplate";
import Login from "./template/Page/Login/Login";
import { LoginTemplate } from "./template/HomeTemplate/LoginTemplate";
import Form from "./template/Page/Home/Form";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setHistory } from "./redux/history/HistoryRedux";
import { CycberBugTemplate } from "./template/HomeTemplate/CycberBugTemplate";
import indexCycberbug from "./template/HomeTemplate/indexCycberbug";
import CreateProject from "./template/Page/Cycberbug/CreateProject/CreateProject";
import NewProject from "./template/Page/Cycberbug/CreateProject/NewProject";
function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "ADD_HISTORY", history: history });
  }, []);
  return (
    <>
      <Switch>
        <LoginTemplate exact path="/login" Component={Login} />
        <LoginTemplate exact path="/new" Component={NewProject} />
        <HomeTemplate exact path="/" Component={Form} />
        <CycberBugTemplate exact path="/cycberBug" Component={indexCycberbug} />
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
