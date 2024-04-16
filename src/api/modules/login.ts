import http from "@/api";
import { API } from "./typings";

// * 获取菜单列表
export const loginApi = (data: API.LoginParams) => {
  return http.post<API.LoginResult>(`/sys-user/login`, data);
};
