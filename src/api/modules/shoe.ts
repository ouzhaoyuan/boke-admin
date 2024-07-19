import http from "@/api";
import { resolve } from "path";
import dayjs from 'dayjs';

// * 获取菜单列表
export const getShotListApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          image: 'http://localhost:3000/file-1721376763806.jpg',
          title: "nike ,男子篮球鞋 科比8 圣诞节限定配色",
          statue: 0,
          code: "SJYD003-02",
          color: "黑/白",
          size: "41",
          number: 1,
          status: 1,
          platform: "淘宝",
          startTime: dayjs('2024-7-19'),
          startPrice: 100,
          endTime: dayjs('2024-7-19'),
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
          status: 1
        }
      ]);
    }, 500);
  });
};
