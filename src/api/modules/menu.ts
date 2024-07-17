import http from "@/api";
import { API } from "./typings";

export const getMenuListApi = () => {
  return http.get<API.MenuItem[]>(`/sys-resource/listData`);
};

export const createMenuApi = (data: API.CreateMenuParams) => {
  return http.post<API.MenuItem[]>(`/sys-resource/insert`, data);
};

export const editMenuApi = (data: API.CreateMenuParams & { id: string }) => {
  return http.post<API.MenuItem[]>(`/sys-resource/update`, data);
};

export const delMenuApi = (id: string) => {
  return http.post<API.MenuItem[]>(`/sys-resource/del`, { id });
};
