import React, { useState } from "react";
import "./App.css";
import { Layout, Menu, PageHeader } from "antd";
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

const { Sider, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Sider trigger={null}>
        {/* <div className="logo" /> */}
        <Menu theme="light" mode="inline" defaultSelectedKeys={["download"]}>
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
      <Layout className="site-layout">
        <PageHeader
          ghost={false}
          subTitle='Copy the url, paste to below, click "start" button, see the magic!'
        />
        <Content className="site-layout-background"></Content>
      </Layout>
    </Layout>
  );
};

export default App;
