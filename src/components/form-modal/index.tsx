import { Modal, Button } from "antd";
import { useEffect, useState } from "react";
import Form from "@/components/form";
import { API } from "@/api/modules/typings";

interface FormModalProps {
  formId: string;
  fields: Form.Fields;
  width?: number;
  title: string;
  visible: boolean;
  params?: object;
  initialValues: object;
  defaultValue?: object;
  onFinish: (form: any) => void;
  onCancel: () => void;
}

export default function FormModal({
  formId = "-1",
  fields = [],
  width = 600,
  title,
  visible,
  onFinish,
  onCancel,
  initialValues
}: FormModalProps) {
  const [submitLoading, setSubmitLoading] = useState(false);

  return (
    <>
      <Modal
        width={width}
        title={title}
        footer={null}
        open={visible}
        onCancel={() => {
          if (submitLoading) return;
          onCancel();
        }}
      >
        <Form
          key={formId}
          fields={fields}
          initialValues={initialValues}
          disabled={submitLoading}
          onFinish={onFinish}
          footerRender={() => {
            return (
              <Button loading={submitLoading} type="primary" htmlType="submit">
                保存
              </Button>
            );
          }}
        ></Form>
      </Modal>
    </>
  );
}
