import React, { useState } from "react";
import Table from "@/components/Table";
import { Button, Modal, TableColumnsType, TableProps } from "antd";
import Form from "@/components/Form";
type TableRowSelection<T> = TableProps<T>["rowSelection"];

interface DataType {
  key: React.ReactNode;
  name: string;
  age: number;
  address: string;
  children?: DataType[];
}

const columns: TableColumnsType<DataType> = [
  {
    title: "名称",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "操作",
    render: () => <div>edit</div>,
    key: "op"
  }
];

const data: DataType[] = [];

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fields: Form.Fields = [
    {
      type: "Select",
      label: "所属客户",
      prop: "customerId",
      options: []
    },
    {
      type: "Select",
      label: "地区",
      prop: "region",
      options: []
    },
    {
      type: "Select",
      label: "所属行业",
      prop: "industry",
      options: []
    }
  ];
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="mb-3">
        <Button onClick={() => setIsModalOpen(!isModalOpen)}>新增菜单</Button>
      </div>
      <Modal
        title="新增菜单"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form fields={fields}></Form>
      </Modal>
      <Table columns={columns} pagination={false} dataSource={data} />
    </>
  );
};
