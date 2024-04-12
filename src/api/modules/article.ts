import http from "@/api";

// * 获取菜单列表
export const getArticleListApi = () => {
  return http.get(`/article/list`);
};
