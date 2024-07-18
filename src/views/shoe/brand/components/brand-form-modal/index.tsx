import Modal from "@/components/form-modal";
import { createMenuApi, editMenuApi } from "@/api/modules/menu";
import { API } from "@/api/modules/typings";
import { message } from "antd";
import { Brand } from "../table-box";
interface BrandFormModalProps {
  isModalOpen: boolean;
  initialValues?: Brand;
  cancel: (update?: boolean) => void;
}
export default function MenuFormModal({
  isModalOpen,
  cancel,
  initialValues = {} as Brand
}: BrandFormModalProps) {
  const isNew = !!initialValues?.id;
  const fields: Form.Fields = [
    {
      type: "Input",
      label: "名称",
      prop: "title",
      rules: [{ required: true, message: "请输入名称" }]
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
    form = { ...form };
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
