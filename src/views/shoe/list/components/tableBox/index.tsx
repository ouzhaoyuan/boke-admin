import React from "react";
import Table from "@/components/Table";
import { Button } from "antd";
import { data } from "autoprefixer";
import { render } from "nprogress";
import TabBox from "../tagBox";

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

const tableBox: React.FC<any> = ({ list }: any) => {
  // const dataSource: shoe[] = [
  //   {
  //     id: 1,
  //     image: "",
  //     name: "nike 男子篮球鞋 科比8 圣诞节限定配色",
  //     code: "SJYD003-02",
  //     color: "黑/白",
  //     size: "41",
  //     number: 1,
  //     status: 1,
  //     platform: "淘宝",
  //     startTime: "2022-01-01",
  //     startPrice: 100,
  //     endTime: "2022-01-01",
  //     endPrice: 100,
  //     profit: 100
  //   }
  // ];

  const columns: any = [
    {
      title: "图片",
      dataIndex: "image",
      width: 100,
      render: (_: any, row: any) => {
        return <img src={row.image} alt={row.title} />;
      }
    },
    {
      title: "商品名称",
      dataIndex: "name",
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
      width: 100,
      fixed: "right",
      render: (_: never, row: never) => {
        return <Button onClick={() => onDel(row)}>删除</Button>;
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
      ></Table>
    </>
  );
};
export default tableBox;
