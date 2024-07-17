import { Modal, Button } from "antd";
import { useEffect, useState } from "react";
import Form from "@/components/Form";
import { API } from "@/api/modules/typings";

interface FormModalProps {
  formId: string;
  fields: Form.Fields;
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
