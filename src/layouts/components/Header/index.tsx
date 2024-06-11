import { Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setisCollapse } from "@/store/modules/global";

import "./index.scss";

const Header = () => {
  const dispatch = useAppDispatch();
  const { isCollapse } = useAppSelector((state) => state.global);
  const toggleCollapsed = () => {
    dispatch(setisCollapse(!isCollapse));
  };
  return (
    <div className="header">
      <div className={`logo-box center ${isCollapse ? "collapsed" : ""}`}>
        {!isCollapse && "球鞋管理"}
        <Button type="primary" onClick={toggleCollapsed}>
          {isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
    </div>
  );
};
export default Header;
