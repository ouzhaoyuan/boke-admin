import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/auth";
import { RouteObject } from "@/routers/interface";

// 首页模块
const articleRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex></LayoutIndex>,
    children: [
      {
        path: "/auth/role",
        element: lazyLoad(React.lazy(() => import("@/views/auth/menu"))),
        meta: {
          requiresAuth: true,
          title: "角色管理",
          key: "auth-role"
        }
      },
      {
        path: "/auth/menu",
        element: lazyLoad(React.lazy(() => import("@/views/auth/menu"))),
        meta: {
          requiresAuth: true,
          title: "菜单目录",
          key: "auth-menu"
        }
      }
    ]
  }
];

export default articleRouter;
