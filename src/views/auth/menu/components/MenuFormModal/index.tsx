import Modal from "@/components/FormModal";
import { createMenuApi, editMenuApi } from "@/api/modules/menu";
import { API } from "@/api/modules/typings";
import { message } from "antd";
interface MenuFormModalProps {
  isModalOpen: boolean;
  parentId?: string;
  initialValues?: object;
  cancel: (update?: boolean) => void;
}
export default function MenuFormModal({
  isModalOpen,
  parentId = "-1",
  cancel,
  initialValues = {}
}: MenuFormModalProps) {
  const isNew = !!Object.keys(initialValues).length;
  const fields: Form.Fields = [
    {
      type: "Input",
      label: "名称",
      prop: "name",
      rules: [{ required: true, message: "请输入名称" }]
    },
    {
      type: "Input",
      label: "路径",
      prop: "path"
    },
    {
      type: "Input",
      label: "编号",
      prop: "code",
      rules: [{ required: true, message: "请输入编号" }]
    },
    {
      type: "Input",
      label: "排序",
      prop: "sort"
    }
  ];
  const onFinish = async (form: API.CreateMenuParams & { id: string }) => {
    form = { ...form, parentId };
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
        formId={parentId + isNew}
        title={isNew ? "编辑菜单" : "新增菜单"}
        visible={isModalOpen}
        initialValues={initialValues}
        fields={fields}
        onFinish={onFinish}
        onCancel={onCancel}
      ></Modal>
    </>
  );
}
