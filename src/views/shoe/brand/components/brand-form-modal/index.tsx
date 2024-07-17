import Modal from "@/components/form-modal";
import { createMenuApi, editMenuApi } from "@/api/modules/menu";
import { API } from "@/api/modules/typings";
import { message } from "antd";
interface BrandFormModalProps {
  formId?: number;
  isModalOpen: boolean;
  initialValues?: object;
  cancel: (update?: boolean) => void;
}
export default function MenuFormModal({
  formId,
  isModalOpen,
  cancel,
  initialValues = {}
}: BrandFormModalProps) {
  const isNew = !!formId
  const fields: Form.Fields = [
    {
      type: "Input",
      label: "名称",
      prop: "name",
      rules: [{ required: true, message: "请输入名称" }]
    },
    {
      type: "Radio",
      label: "是否启用",
      prop: "sort"
    }
  ];
  const onFinish = async (form: any & { id: string }) => {
    form = { ...form ,formId};
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
        formId={String(formId)}
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
