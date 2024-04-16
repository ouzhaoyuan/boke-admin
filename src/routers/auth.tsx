import Layout from "@/layouts/index";
import { Navigate } from "react-router-dom";
// 懒加载 Layout
// import React from "react";
// import lazyLoad from "@/routers/utils/lazyLoad";
// const Layout = lazyLoad(React.lazy(() => import("@/layouts/index")));

/**
 * @description: default layout
 */
export const LayoutIndex = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Layout />;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
};
