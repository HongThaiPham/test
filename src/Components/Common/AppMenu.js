import React from "react";
import "./AppMenu.css";
import { Button } from "antd";
import { CloseOutlined, MinusOutlined } from "@ant-design/icons";

const AppMenu = () => {
  return (
    <div className="app-menu-layout">
      <div className="app-menu-title">Video Downloader - Ripsave.com</div>
      <div className="app-menu-action">
        <Button
          type="dashed"
          className="app-menu-button"
          size="small"
          icon={<MinusOutlined />}
        />
        <Button
          type="primary"
          danger
          className="app-menu-button"
          size="small"
          icon={<CloseOutlined />}
        />
      </div>
    </div>
  );
};

export default AppMenu;
