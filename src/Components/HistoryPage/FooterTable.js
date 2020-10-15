import React from "react";
import { Button } from "antd";

const FooterTable = () => {
  return (
    <div className="d-flex">
      <Button>Delete</Button>
      <Button>Download</Button>
      <Button>Stop</Button>
    </div>
  );
};

export default FooterTable;
