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
    <div>
      <div>
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          {isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
    </div>
  );
};
export default Header;
