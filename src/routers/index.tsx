import { Navigate, useRoutes, RouteObject } from "react-router-dom";
import {} from "@/routers/interface";
import Login from "@/views/login/index";

const metaRouters: any = import.meta.glob("./modules/*.tsx",{ eager: true });

// * 处理路由
export const routerArray: RouteObject[] = [];
Object.keys(metaRouters).forEach((item) => {
  Object.keys(metaRouters[item]).forEach((key) => {
    routerArray.push(...metaRouters[item][key]);
  });
});
console.log(routerArray);

export const rootRouter: RouteObject | any[] = [
  {
    path: "/login",
    element: <Login />,
    meta: {
      requiresAuth: false,
      title: "登录页",
      key: "login"
    }
  },
  ...routerArray,
  {
    path: "*",
    element: <Navigate to="/404" />
  }
];

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
