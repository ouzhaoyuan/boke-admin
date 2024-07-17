import http from "@/api";
import { resolve } from "path";

// * 获取菜单列表
export const getShotListApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          image: "",
          title: "nike ,男子篮球鞋 科比8 圣诞节限定配色",
          statue: 0,
          code: "SJYD003-02",
          color: "黑/白",
          size: "41",
          number: 1,
          status: 1,
          platform: "淘宝",
          startTime: "2022-01-01",
          startPrice: 100,
          endTime: "2022-01-01",
          endPrice: 100,
          profit: 100
        }
      ]);
    }, 500);
  });
};
export const getShotBrandApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "nike",
          statue: 0
        }
      ]);
    }, 500);
  });
};
