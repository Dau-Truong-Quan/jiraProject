import axios from "axios";
import { BASE_URL, httpService, TOKEN_CYBERSOFT } from "./configURL";

export const userService = {
  dangNhap: (userlogin) => {
    // return axios({
    //   method: "POST",
    //   url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
    //   data: dataLogin,
    //   headers: {
    //     TokenCybersoft: TOKEN_CYBERSOFT,
    //   },
    // });
    return httpService.post("/Users/signin", userlogin);
  },

  getUserList: () => {
    return httpService.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung");
  },

  deleteUser: (taiKhoan) => {
    return httpService.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  },
};
