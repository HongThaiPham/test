import React, { useState } from "react";
import "./App.css";
import { Layout, Menu } from "antd";
import {
  CloudDownloadOutlined,
  HistoryOutlined,
  SettingOutlined,
  LoginOutlined,
  MessageOutlined,
  InfoCircleOutlined,
  ToolOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import AppMenu from "./Components/Common/AppMenu";

import DownloadPage from "./Components/DownloadPage";
import HistoryPage from "./Components/HistoryPage";
import SettingPage from "./Components/SettingPage";

const { Sider, Content } = Layout;

const App = () => {
  const [menuSelected, setMenuSelected] = useState("download");
  const handleMenuClick = (e) => {
    console.log("click", e);
    setMenuSelected(e.key);
  };

  return (
    <Layout>
      <AppMenu />
      <Layout className="site-layout">
        <Sider trigger={null}>
          {/* <div className="logo" /> */}
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={[menuSelected]}
            onClick={handleMenuClick}
          >
            <Menu.ItemGroup title="Tool" icon={<ToolOutlined />}>
              <Menu.Item key="download" icon={<CloudDownloadOutlined />}>
                Download
              </Menu.Item>
              <Menu.Item key="history" icon={<HistoryOutlined />}>
                History
              </Menu.Item>
              <Menu.Item key="setting" icon={<SettingOutlined />}>
                Settings
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Others" icon={<TeamOutlined />}>
              <Menu.Item key="login" icon={<LoginOutlined />}>
                Login
              </Menu.Item>
              <Menu.Item key="contact" icon={<MessageOutlined />}>
                Contact
              </Menu.Item>
              <Menu.Item key="about" icon={<InfoCircleOutlined />}>
                About
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu>
        </Sider>
        <Content className="site-layout-background">
          {menuSelected === "download" && <DownloadPage />}
          {menuSelected === "history" && <HistoryPage />}
          {menuSelected === "setting" && <SettingPage />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
