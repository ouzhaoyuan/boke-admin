import { Menu, Spin } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { getMenuListApi } from "@/api/modules/login";
import * as Icons from "@ant-design/icons";
import "./index.scss";

const LayoutMenu = (props: any) => {
  const { pathname } = useLocation();
  const {
    isCollapse,
    setBreadcrumbList,
    setAuthRouter,
    setMenuList: setMenuListAction
  } = props;
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);

  // 定义 menu 类型
  type MenuItem = Required<MenuProps>["items"][number];
  const [menuList, setMenuList] = useState<MenuItem[]>([]);
  // 定义 menu 类型
  const getItem = (
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem => {
    return {
      key,
      icon,
      children,
      label,
      type
    } as MenuItem;
  };

  // 动态渲染 Icon 图标
  const customIcons: { [key: string]: any } = Icons;
  const addIcon = (name: string) => {
    return React.createElement(customIcons[name]);
  };

  // 处理后台返回菜单 key 值为 antd 菜单需要的 key 值
  const deepLoopFloat = (
    menuList: Menu.MenuOptions[],
    newArr: MenuItem[] = []
  ) => {
    menuList.forEach((item: Menu.MenuOptions) => {
      // 下面判断代码解释 *** !item?.children?.length   ==>   (!item.children || item.children.length === 0)
      if (!item?.children?.length)
        return newArr.push(getItem(item.title, item.path, addIcon(item.icon!)));
      newArr.push(
        getItem(
          item.title,
          item.path,
          addIcon(item.icon!),
          deepLoopFloat(item.children)
        )
      );
    });
    return newArr;
  };

  const getMenuData = async () => {
    const { data, err } = await getMenuListApi();
    if (err) return;
    if (data) setMenuList(deepLoopFloat(data));
  };

  useEffect(() => {
    getMenuData();
  }, []);

  const [loading, setLoading] = useState(false);

  return (
    <Spin spinning={loading} tip="Loading...">
      <Menu
        theme="dark"
        mode="inline"
        triggerSubMenuAction="click"
        // openKeys={openKeys}
        // selectedKeys={selectedKeys}
        items={menuList}
        // onClick={clickMenu}
        // onOpenChange={onOpenChange}
      ></Menu>
    </Spin>
  );
};
export default LayoutMenu;
