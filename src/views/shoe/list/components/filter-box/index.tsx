import React from "react";
import { DatePicker, Select, Col, Row, Input, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import type { SelectProps } from "antd";

const { RangePicker } = DatePicker;

const options: SelectProps["options"] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i
  });
}

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const filterBox: React.FC = () => {
  return (
    <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} className="mb10">
      <Col span={4}>
        <RangePicker />
      </Col>
      <Col span={4}>
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="请选择平台"
          defaultValue={["a10", "c12"]}
          onChange={handleChange}
          options={options}
        />
      </Col>
      <Col span={4}>
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="请选择品牌"
          defaultValue={["a10", "c12"]}
          onChange={handleChange}
          options={options}
        />
      </Col>
      <Col span={4}>
        <Input placeholder="请选择状态" />
      </Col>
      <div style={{ marginLeft: "auto" }}>
        <Button type="primary" icon={<DownloadOutlined />}>
          新增
        </Button>
      </div>
    </Row>
  );
};

export default filterBox;
