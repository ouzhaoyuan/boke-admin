import React, { useEffect, useState } from "react";
import Table from "@/components/table";
import {
  Button,
  message,
  Popconfirm,
  TableColumnsType,
  TableProps
} from "antd";
import MenuFormModal from "./components/menu-form-modal";
import { getMenuListApi, delMenuApi } from "@/api/modules/menu";
import { API } from "@/api/modules/typings";

type TableRowSelection<T> = TableProps<T>["rowSelection"];

interface TableMenuItem extends API.MenuItem {
  isBtn?: boolean;
}

export default function Menu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [list, setList] = useState<API.MenuItem[]>([]);
  // 新增子菜单的父id
  const [parentId, setParentId] = useState("-1");
  const [initialValues, setItialValues] = useState<API.MenuItem>();

  const columns: TableColumnsType<TableMenuItem> = [
    {
      title: "名称",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "操作",
      width: 350,
      render: (record) => (
        <div>
          <Button
            type="primary"
            className="mr-1"
            onClick={() => onEdit(record)}
          >
            编辑
          </Button>
          {!record.isBtn && (
            <Button
              type="primary"
              className="mr-1"
              onClick={() => onAdd(record.id)}
            >
              添加下级
            </Button>
          )}
          <Popconfirm
            title="请确定是否删除"
            okText="确定"
            cancelText="取消"
            onConfirm={() => {
              onDelete(record.id);
            }}
          >
            <Button type="primary">删除</Button>
          </Popconfirm>
        </div>
      ),
      key: "op"
    }
  ];

  const onCanel = (update?: boolean) => {
    setIsModalOpen(false);
    if (update) getMenuList();
  };

  const onAdd = (id = "-1") => {
    if (id) setParentId(id);
    setItialValues({});
    setIsModalOpen(!isModalOpen);
  };

  const onEdit = (form: TableMenuItem) => {
    setItialValues(form);
    setIsModalOpen(!isModalOpen);
  };

  const onDelete = async (id: string) => {
    const { err } = await delMenuApi(id);
    if (err) return;
    message.success("删除成功");
    getMenuList();
  };

  useEffect(() => {
    getMenuList();
  }, []);

  const getMenuList = async () => {
    let { data, err } = await getMenuListApi();
    if (err || !data) return;
    setList(data?.map((item) => processingData(item)) || []);
  };
  const processingData = (data: TableMenuItem) => {
    if (data.children?.length) {
      data.children = data.children.map((item) => processingData(item));
    } else {
      data.children = undefined;
    }
    data.isBtn = data.code.includes("Btn");
    return data;
  };

  return (
    <>
      <div className="mb-3">
        <Button onClick={() => onAdd()}>新增菜单</Button>
      </div>
      <MenuFormModal
        isModalOpen={isModalOpen}
        cancel={onCanel}
        parentId={parentId}
        initialValues={initialValues}
      ></MenuFormModal>
      <Table
        columns={columns}
        pagination={false}
        dataSource={list}
        rowKey="id"
      />
    </>
  );
}
