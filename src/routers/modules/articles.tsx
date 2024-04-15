import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// 首页模块
const articleRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex></LayoutIndex>,
    children: [
      {
        path: "/article/list",
        element: lazyLoad(React.lazy(() => import("@/views/articles/index"))),
        meta: {
          requiresAuth: true,
          title: "文章列表",
          key: "articles-list"
        }
      },
      {
        path: "/article/draft",
        element: lazyLoad(React.lazy(() => import("@/views/articles/draft"))),
        meta: {
          requiresAuth: true,
          title: "草稿箱",
          key: "articles-draft"
        }
      },
      {
        path: "/article/info/:id",
        element: lazyLoad(React.lazy(() => import("@/views/articles/info"))),
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
