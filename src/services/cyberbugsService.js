// import { Axios } from "axios";
import { DOMAN_CYBERBUG } from "../util/constant/SettingSystem";
import { TOKEN_CYBERSOFT, USER_LOGIN } from "./configURL";
const { default: Axios } = require("axios");

export const cyberbugsService = {
  signinCyberBugs: (userlogin) => {
    return Axios({
      url: `${DOMAN_CYBERBUG}/Users/signin`,
      method: "POST",
      data: userlogin,
    });
  },
  getAllProductCategory: () => {
    return Axios({
      url: `${DOMAN_CYBERBUG}/ProjectCategory`,
      method: "GET",
    });
  },
  createProject: (project) => {
    return Axios({
      url: `${DOMAN_CYBERBUG}/Project/createProjectAuthorize`,
      method: "POST",
      data: project,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN_CYBERSOFT),
      },
    });
  },
};
