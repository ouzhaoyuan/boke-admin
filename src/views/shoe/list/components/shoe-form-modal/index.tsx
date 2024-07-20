import Modal from "@/components/form-modal";
import { createMenuApi, editMenuApi } from "@/api/modules/menu";
import { API } from "@/api/modules/typings";
import { Image } from "antd";
import { message } from "antd";
import { useEffect, useState } from "react";
interface ShoeFormModalProps {
  formId?: number;
  isModalOpen: boolean;
  initialValues?: any;
  cancel: (update?: boolean) => void;
}
export default function MenuFormModal({
  isModalOpen,
  cancel,
  initialValues = {}
}: ShoeFormModalProps) {
  const isNew = !!initialValues?.id;
  useEffect(() => {
    // setFileList(initialValues.image ? initialValues.image : []);
  }, ["initialValues"]);
  const fields: Form.Fields = [
    {
      type: "Upload",
      action: "http://localhost:3000/upload",
      label: "图片",
      prop: "image",
      getValueFromEvent: (e) => {
        return e?.file?.response?.data?.url;
      },
      showUploadList: false,
      listType: "picture-card",
      rules: [{ required: true, message: "请上传图片" }]
    },
    {
      type: "Input",
      label: "名称",
      prop: "title",
      rules: [{ required: true, message: "请输入名称" }]
    },
    {
      type: "Input",
      label: "货号",
      prop: "code",
      rules: [{ required: true, message: "请输入货号" }]
    },
    {
      type: "Input",
      label: "颜色",
      prop: "color",
      rules: [{ required: true, message: "请输入颜色" }]
    },
    {
      type: "Input",
      label: "尺码",
      prop: "size",
      rules: [{ required: true, message: "请输入尺码" }]
    },
    {
      type: "Input",
      label: "数量",
      prop: "number",
      rules: [{ required: true, message: "请输入数量" }]
    },
    {
      type: "Select",
      label: "入手平台",
      prop: "platform",
      rules: [{ required: true, message: "请选择入手平台" }],
      placeholder: "请选择入手平台",
      options: [
        { label: "淘宝", value: 1 },
        { label: "京东", value: 2 }
      ]
    },
    {
      type: "DatePicker",
      label: "入手时间",
      prop: "startTime",
      rules: [{ required: true, message: "请选择入手时间" }],
      placeholder: "请选择入手时间"
    },
    {
      type: "Input",
      label: "入手价格",
      prop: "startPrice",
      rules: [{ required: true, message: "请输入入手价格" }]
    },
    {
      type: "DatePicker",
      label: "卖出时间",
      prop: "endTime",
      rules: [{ required: true, message: "请选择卖出时间" }],
      placeholder: "请选择卖出时间"
    },
    {
      type: "Input",
      label: "卖出价格",
      prop: "endPrice",
      rules: [{ required: true, message: "请输入卖出价格" }]
    },
    {
      type: "Radio",
      label: "是否启用",
      options: [
        { label: "是", value: 1 },
        { label: "否", value: 0 }
      ],
      rules: [{ required: true }],
      prop: "status"
    }
  ];
  const onFinish = async (form: any & { id: string }) => {
    let _form = { ...form };
    console.log(initialValues);
    console.log(form);

    let api = isNew ? editMenuApi : createMenuApi;
    const { err } = await api(form);
    if (err) return err;
    message.success(isNew ? "新增成功" : "编辑成功");
    cancel(true);
  };

  const onCancel = () => {
    cancel();
  };
  return (
    <>
      <Modal
        formId={String(initialValues?.id)}
        width={1000}
        title={isNew ? "编辑品牌" : "新增品牌"}
        visible={isModalOpen}
        initialValues={initialValues}
        fields={fields}
        onFinish={onFinish}
        onCancel={onCancel}
      ></Modal>
    </>
  );
}
