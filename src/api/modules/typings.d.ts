export declare namespace API {
  interface LoginParams {
    username: string;
    password: string;
  }

  interface LoginResult {
    token: string;
  }

  // 用户管理
  interface UserInfoparams {
    id: string;
  }

  interface UserInfoResult {}

  interface UserIdResult {}

  // 菜单管理

  interface CreateMenuParams {
    code: string; //菜单编码
    path: string; // 路径
    name: string; //菜单名称
    sort?: string; //排序
    parentId: string; //父级菜单,没有父级就传-1
  }

  interface MenuParams {
    userId: string;
    needChild: string;
    resourcePId: string; //-1,否则传当前级菜单id
  }

  interface MenuItem {
    id: string; // 无
    code: string; // 菜单编码
    parentId: string; // 父级菜单
    children?: Menu[]; // 子级
    path: string; // 菜单路径
    creator: string; // 无
    name: string; // 无
    sort: number;
    menuList: MenuItem[];
  }

}
