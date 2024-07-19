import React from "react";
import Table from "@/components/table";
import { Button } from "antd";
import Image from "@/components/base-image";
import { data } from "autoprefixer";
import { render } from "nprogress";
import TabBox from "../tag-box";

export interface shoe {
  id: number;
  image: string;
  name: string;
  code: string;
  color: string;
  size: string;
  number: number;
  status: number;
  platform: string;
  startTime: string;
  startPrice: number;
  endTime: string;
  endPrice: number;
  profit: number;
}

const tableBox: React.FC<any> = ({ list, edit }: any) => {
  const columns: any = [
    {
      title: "图片",
      dataIndex: "image",
      width: 100,
      render: (_: any, row: any) => {
        return <Image src={row.image}></Image>;
      }
    },
    {
      title: "商品名称",
      dataIndex: "title",
      ellipsis: true,
      width: 200
    },
    {
      title: "货号",
      dataIndex: "code",
      width: 150
    },
    {
      title: "颜色",
      dataIndex: "color",
      width: 100
    },
    {
      title: "尺码",
      dataIndex: "size",
      width: 100
    },
    {
      title: "数量",
      dataIndex: "number",
      width: 100
    },
    {
      title: "状态",
      dataIndex: "status",
      width: 100,
      render: (_: any, row: shoe) => {
        return <TabBox status={row.status}></TabBox>;
      }
    },
    {
      title: "入手平台",
      dataIndex: "platform",
      width: 100
    },
    {
      title: "入手时间",
      dataIndex: "startTime",
      width: 150
    },
    {
      title: "入手价格",
      dataIndex: "startPrice",
      width: 100
    },
    {
      title: "卖出时间",
      dataIndex: "endTime",
      width: 150
    },
    {
      title: "卖出价格",
      dataIndex: "endPrice",
      width: 100
    },
    {
      title: "利润",
      dataIndex: "profit",
      width: 100
    },
    {
      title: "操作",
      dataIndex: "operaction",
      width: 200,
      fixed: "right",
      render: (_: never, row: never) => {
        return (
          <div>
            <Button className="mr10" onClick={() => edit(row)}>
              修改
            </Button>
            <Button onClick={() => onDel(row)}>删除</Button>
          </div>
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
        columns={columns}
        rowKey="id"
      ></Table>
    </>
  );
};
export default tableBox;
