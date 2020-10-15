import React from "react";

import { Select, Input, Button } from "antd";
import { FolderOpenOutlined } from "@ant-design/icons";
const { Option } = Select;

const SettingPage = () => {
  return (
    <div className="d-flex">
      <Select defaultValue="mp4">
        <Option value="mp4">MP4</Option>
        <Option value="mp3">MP3</Option>
      </Select>
      <Input placeholder="Save as" style={{ margin: "0 0.5em" }} />
      <Button
        icon={<FolderOpenOutlined />}
        type="primary"
        style={{ width: 50 }}
      />
    </div>
  );
};

export default SettingPage;
