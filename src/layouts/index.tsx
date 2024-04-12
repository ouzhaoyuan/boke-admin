import LayoutHeader from "./components/Header";
import LayoutFooter from "./components/Footer";
import LayoutMenu from "./components/Menu";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import "./index.scss";
const { Content, Sider } = Layout;
type LayoutIndexType = {
  isCollapse?: boolean;
};

const LayoutIndex = (props: LayoutIndexType) => {
  return (
    <>
      <Layout>
        <LayoutHeader></LayoutHeader>
        <Layout>
          <Sider
            trigger={null}
            collapsed={props.isCollapse}
            width={220}
            theme="dark"
          >
            <LayoutMenu></LayoutMenu>
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
