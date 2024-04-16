import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { RouteObject } from "@/routers/interface";
import {LayoutIndex} from "@/routers/auth";

// 错误页面模块
const errorRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex></LayoutIndex>,
    children: [
      {
        path: "/403",
        element: lazyLoad(React.lazy(() => import("@/views/error/403"))),
        meta: {
          requiresAuth: true,
          title: "403页面",
          key: "403"
        }
      },
      {
        path: "/404",
        element: lazyLoad(React.lazy(() => import("@/views/error/404"))),
        meta: {
          requiresAuth: false,
          title: "404页面",
          key: "404"
        }
      },
      {
        path: "/500",
        element: lazyLoad(React.lazy(() => import("@/views/error/500"))),
        meta: {
          requiresAuth: false,
          title: "500页面",
          key: "500"
        }
      }
    ]
  }
];

export default errorRouter;
