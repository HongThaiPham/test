import React, { useState } from "react";
import { Table, Progress } from "antd";
import FooterTable from "./FooterTable";

const tempData = [
  {
    key: 1,
    name:
      "[Nhạc Sóng Alpha] Tăng khả năng, tập trung, tư duy, IQ, Sáng tạo, nghi nhớ thông tin || Part 1",
    dated: "2020-10-20",
    size: "1.2GB",
    speed: "1.2 mb/s",
    status: 20,
  },
  {
    key: 2,
    name:
      "[Nhạc Sóng Alpha] Tăng khả năng, tập trung, tư duy, IQ, Sáng tạo, nghi nhớ thông tin || Part 1",
    dated: "2020-10-20",
    size: "1.2GB",
    speed: "N/A",
    status: "done",
  },
  {
    key: 3,
    name:
      "[Nhạc Sóng Alpha] Tăng khả năng, tập trung, tư duy, IQ, Sáng tạo, nghi nhớ thông tin || Part 1",
    dated: "2020-10-20",
    size: "1.2GB",
    speed: "N/A",
    status: "done",
  },
  {
    key: 4,
    name:
      "[Nhạc Sóng Alpha] Tăng khả năng, tập trung, tư duy, IQ, Sáng tạo, nghi nhớ thông tin || Part 1",
    dated: "2020-10-20",
    size: "1.2GB",
    speed: "N/A",
    status: "done",
  },
  {
    key: 5,
    name:
      "[Nhạc Sóng Alpha] Tăng khả năng, tập trung, tư duy, IQ, Sáng tạo, nghi nhớ thông tin || Part 1",
    dated: "2020-10-20",
    size: "1.2GB",
    speed: "N/A",
    status: "done",
  },
  {
    key: 6,
    name:
      "[Nhạc Sóng Alpha] Tăng khả năng, tập trung, tư duy, IQ, Sáng tạo, nghi nhớ thông tin || Part 1",
    dated: "2020-10-20",
    size: "1.2GB",
    speed: "N/A",
    status: "done",
  },
  {
    key: 10,
    name:
      "[Nhạc Sóng Alpha] Tăng khả năng, tập trung, tư duy, IQ, Sáng tạo, nghi nhớ thông tin || Part 1",
    dated: "2020-10-20",
    size: "1.2GB",
    speed: "N/A",
    status: "done",
  },
  {
    key: 7,
    name:
      "[Nhạc Sóng Alpha] Tăng khả năng, tập trung, tư duy, IQ, Sáng tạo, nghi nhớ thông tin || Part 1",
    dated: "2020-10-20",
    size: "1.2GB",
    speed: "N/A",
    status: "done",
  },
  {
    key: 8,
    name:
      "[Nhạc Sóng Alpha] Tăng khả năng, tập trung, tư duy, IQ, Sáng tạo, nghi nhớ thông tin || Part 1",
    dated: "2020-10-20",
    size: "1.2GB",
    speed: "N/A",
    status: "done",
  },
  {
    key: 9,
    name:
      "[Nhạc Sóng Alpha] Tăng khả năng, tập trung, tư duy, IQ, Sáng tạo, nghi nhớ thông tin || Part 1",
    dated: "2020-10-20",
    size: "1.2GB",
    speed: "N/A",
    status: "done",
  },
];

const HistoryPage = () => {
  const [history, setHistory] = useState(tempData);
  const handleChangeSelect = (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  };

  return (
    <Table
      size="small"
      dataSource={history}
      rowSelection={{
        type: "checkbox",
        onChange: handleChangeSelect,
      }}
      pagination={false}
      scroll={{ x: 800, y: 285 }}
      footer={() => <FooterTable />}
    >
      <Table.Column
        title="Name"
        key="name"
        dataIndex="name"
        ellipsis={true}
        width={150}
        fixed="left"
      />
      <Table.Column title="Dated" key="dated" dataIndex="dated" />
      <Table.Column title="Size" key="size" dataIndex="size" />
      <Table.Column title="Speed" key="speed" dataIndex="speed" />
      <Table.Column
        title="Status"
        key="name"
        dataIndex="status"
        render={(value, row, index) => {
          if (isNaN(value)) return <b>Done</b>;
          return <Progress percent={50} size="small" status="active" />;
        }}
        fixed="right"
      />
    </Table>
  );
};

export default HistoryPage;
