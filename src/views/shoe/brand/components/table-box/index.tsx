import React from "react";
import Table from "@/components/table";
import { Button, Switch, Popconfirm } from "antd";
import { data } from "autoprefixer";
import { render } from "nprogress";

export interface Brand {
  id: number;
  name: string;
  status: number;
}

const tableBox: React.FC<any> = ({ list, onEdit }: any) => {
  const columns: any = [
    {
      title: "id",
      dataIndex: "id"
    },
    {
      title: "品牌",
      dataIndex: "title"
    },
    {
      title: "状态",
      dataIndex: "status",
      width: 100,
      render: (_: any, row: Brand) => {
        return <Switch checked={row.status === 1}></Switch>;
      }
    },
    {
      title: "操作",
      dataIndex: "operaction",
      width: 200,
      fixed: "right",
      render: (_: never, row: Brand) => {
        return (
          <>
            <Button className="mr10" onClick={() => onEdit(row)}>
              编辑
            </Button>
            <Popconfirm
              title="请确定是否删除"
              okText="确定"
              cancelText="取消"
              onConfirm={() => {
                onDel(row.id);
              }}
            >
              <Button type="primary">删除</Button>
            </Popconfirm>
          </>
        );
      }
    }
  ];
  const onDel = (row: any) => {
    console.log(row);
  };
  return (
    <>
      <Table
        dataSource={list}
        scroll={{ x: 1000, y: 900 }}
        sticky
        rowKey="id"
        columns={columns}
      ></Table>
    </>
  );
};
export default tableBox;
