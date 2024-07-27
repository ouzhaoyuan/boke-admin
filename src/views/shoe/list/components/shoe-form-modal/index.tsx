import Modal from "@/components/form-modal";
import { addShoeApi } from "@/api/modules/shoe";
import { API } from "@/api/modules/typings";
import { Image } from "antd";
import { message } from "antd";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
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
  const fields: Form.Fields = [
    {
      type: "Upload",
      action: "http://localhost:3000/upload",
      label: "图片",
      prop: "image",
      valuePropName: "fileList",
      getValueFromEvent: (e) => {
        console.log('====================================');
        console.log(e);
        console.log('====================================');
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
      format:'YYYY/M/D',
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
      format:'YYYY/M/D',
      placeholder: "请选择卖出时间"
    },
    {
      type: "Input",
      label: "卖出价格",
      prop: "endPrice"
    },
    {
      type: "Radio",
      label: "是否启用",
      options: [
        { label: "是", value: 1 },
        { label: "否", value: 0 }
      ],
      rules: [{ required: true, message: "请选择是否启用" }],
      prop: "status"
    }
  ];
  const onFinish = async (form: any & { id: string }) => {
    let _form = { ...form };
    let api = isNew ? addShoeApi : addShoeApi;
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
