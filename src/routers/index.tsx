import { Navigate, useRoutes } from "react-router-dom";
import { RouteObject } from "@/routers/interface";
import Login from "@/views/login/index";
import React from "react";
interface MetaRouters {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

// 导入所有router
// * 导入所有router
const metaRouters: MetaRouters = import.meta.glob(
  "./modules/*.tsx"
);

// * 处理路由
export const routerArray: RouteObject[] = [];
Object.keys(metaRouters).forEach((item) => {
  Object.keys(metaRouters[item]).forEach((key) => {
    routerArray.push(...metaRouters[item][key]);
  });
});

export const rootRouter: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/login" />
  },
  {
    path: '/login',
    element: <Login></Login>,
    meta: {
      requiresAuth: false,
      title: "登录页",
      key: "login"
    }
  }
];
