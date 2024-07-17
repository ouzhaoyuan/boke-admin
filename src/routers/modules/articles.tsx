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
        path: "/article/list",
        element: lazyLoad(React.lazy(() => import("@/views/Articles/index"))),
        meta: {
          requiresAuth: true,
          title: "文章列表",
          key: "articles-list"
        }
      },
      {
        path: "/article/draft",
        element: lazyLoad(React.lazy(() => import("@/views/Articles/info"))),
        meta: {
          requiresAuth: true,
          title: "草稿箱",
          key: "articles-draft"
        }
      },
      {
        path: "/article/info/:id",
        element: lazyLoad(React.lazy(() => import("@/views/Articles/info"))),
        meta: {
          requiresAuth: true,
          title: "文章详情",
          key: "articles-info"
        }
      }
    ]
  }
];

export default articleRouter;
