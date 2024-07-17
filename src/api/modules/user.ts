import http from "@/api";
import { API } from "./typings";

export const loginApi = (data: API.LoginParams) => {
  return http.post<API.LoginResult>(`/sys-user/login`, data);
};

export const getUserId = () => {
  return http.post<API.UserIdResult>(`/sys-user/page`);
};

export const getUserInfoApi = () => {
  return http.get<API.UserInfoResult>(`/sys-user/getUserInfo`);
};

