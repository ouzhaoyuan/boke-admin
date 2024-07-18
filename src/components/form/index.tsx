import { API } from "@/api/modules/typings";
import {
  Form as AntdForm,
  Input,
  Select,
  Radio,
  Row,
  Col,
  FormProps as AntdFormProps
} from "antd";
import { ReactNode, useEffect } from "react";

type FormProps = Omit<AntdFormProps, "onFinish" | "fields"> & {
  okText?: string;
  resetText?: string;
  initialValues: object;
  fields: Form.Field[];
  onFinish?: (values: API.CreateMenuParams) => void;
  footerRender?: () => ReactNode | ReactNode[];
};

const fieldComponents = {
  Input,
  Textarea: Input.TextArea,
  Select,
  Radio: Radio.Group
};
export default function Form({
  onFinish,
  disabled,
  fields,
  initialValues,
  footerRender
}: FormProps) {
  const [form] = AntdForm.useForm();

  useEffect(() => {
    if (disabled) {
      form.setFieldsValue(initialValues);
    }
  }, [disabled]);

  const renderFields = () => {
    return fields.map((field, index) => {
      const Component = fieldComponents[field.type] as any;
      return (
        <Col span={field.span || 24} key={index}>
          <AntdForm.Item
            key={field.prop}
            rules={field.rules}
            label={field.label}
            labelCol={{ span: 8 }}
            name={field.prop}
          >
            <Component {...field} />
          </AntdForm.Item>
        </Col>
      );
    });
  };

  return (
    <AntdForm
      form={form}
      initialValues={initialValues}
      layout="vertical"
      onFinish={onFinish}
    >
      <Row gutter={12}>{renderFields()}</Row>
      {footerRender?.()}
    </AntdForm>
  );
}
