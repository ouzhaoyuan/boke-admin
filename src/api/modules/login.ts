import http from "@/api";

// * 获取菜单列表
export const getMenuListApi = () => {
  return http.get<Menu.MenuOptions[]>(`/menu/list`, {}, { showErr: false });
};
