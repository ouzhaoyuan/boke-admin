import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/auth";
import { RouteObject } from "@/routers/interface";

// 首页模块
const shoeRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex></LayoutIndex>,
    children: [
      {
        path: "/shoe/list",
        element: lazyLoad(React.lazy(() => import("@/views/shoe/list"))),
        meta: {
          requiresAuth: true,
          title: "球鞋列表",
          key: "shoe-list"
        }
      },
      {
        path: "/shoe/info/:id",
        element: lazyLoad(React.lazy(() => import("@/views/shoe/info"))),
        meta: {
          requiresAuth: true,
          title: "球鞋详情",
          key: "shoe-info"
        }
      }
    ]
  }
];

export default shoeRouter;
