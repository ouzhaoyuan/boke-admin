import http from "@/api";
import { resolve } from "path";
import dayjs from 'dayjs';

// * 获取菜单列
export const getShotListApi = () => {
  return http.get<any>(`/shoe/getList`);
};

export const addShoeApi = (data: any) => {
  return http.post<any>(`/shoe/addShoe`,data);
};

export const getShotBrandApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "nike",
          status: 1
        }
      ]);
    }, 500);
  });
};
