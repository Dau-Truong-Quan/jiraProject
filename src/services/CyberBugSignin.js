// import { Axios } from "axios";
import { DOMAN_CYBERBUG } from "../util/constant/SettingSystem";
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
};
