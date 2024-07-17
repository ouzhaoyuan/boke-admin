import LayoutHeader from "./components/header";
import LayoutFooter from "./components/footer";
import LayoutMenu from "./components/menu";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { useAppSelector } from "@/store/hooks";

import "./index.scss";
const { Content, Sider } = Layout;
type LayoutIndexType = {
  isCollapse?: boolean;
};

const LayoutIndex = (props: LayoutIndexType) => {
  const { isCollapse } = useAppSelector((state) => state.global);
  return (
    <>
      <Layout>
        <LayoutHeader></LayoutHeader>
        <Layout>
          <Sider
            trigger={null}
            collapsed={isCollapse}
            width={220}
            theme="dark"
          >
            <LayoutMenu isCollapse={isCollapse}></LayoutMenu>
          </Sider>
          <Content className="content">
            <Outlet></Outlet>
          </Content>
        </Layout>

        <LayoutFooter></LayoutFooter>
      </Layout>
    </>
  );
};
export default LayoutIndex;
