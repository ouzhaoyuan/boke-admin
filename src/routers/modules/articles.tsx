// import React from "react";
// import lazyLoad from "@/routers/util/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";
import Articles from "@/views/articles/index";
import ArticlesDarft from "@/views/articles/draft";

// 首页模块
const articleRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex></LayoutIndex>,
    children: [
      {
        path: "/article/list",
        // element: lazyLoad(React.lazy(() => import("@/views/home/index"))),
        element: <Articles />,
        meta: {
          requiresAuth: true,
          title: "文章列表",
          key: "articles-list"
        }
      },
      {
        path: "/article/draft",
        // element: lazyLoad(React.lazy(() => import("@/views/home/index"))),
        element: <ArticlesDarft />,
        meta: {
          requiresAuth: true,
          title: "草稿箱",
          key: "articles-draft"
        }
      }
    ]
  }
];

export default articleRouter;
