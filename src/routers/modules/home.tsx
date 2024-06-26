// import React from "react";
// import lazyLoad from "@/routers/util/lazyLoad";
import { LayoutIndex } from "@/routers/auth";
import { RouteObject } from "@/routers/interface";
import Home from "@/views/home/index";

// 首页模块
const homeRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex></LayoutIndex>,
    children: [
      {
        path: "/home",
        // element: lazyLoad(React.lazy(() => import("@/views/home/index"))),
        element: <Home />,
        meta: {
          requiresAuth: true,
          title: "首页",
          key: "home"
        }
      }
    ]
  }
];

export default homeRouter;
