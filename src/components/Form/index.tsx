import {
  Form as AntdForm,
  Input,
  Select,
  Radio,
  Row,
  Col,
  FormProps as AntdFormProps
} from "antd";

type FormProps = Omit<AntdFormProps, "onFinish" | "fields"> & {
  okText?: string;
  resetText?: string;
  fields: Form.Field[];
  onFinish?: (values: Record<string, any>) => void;
  // footerRender?: () => ReactNode | ReactNode[];
};

const fieldComponents = {
  Input,
  Textarea: Input.TextArea,
  Select,
  Radio: Radio.Group
};
export default function Form(props: FormProps) {
  const renderFields = () => {
    return props.fields.map((field, index) => {
      const Component = fieldComponents[field.type] as any;

      return (
        <Col span={field.span || 24} key={index}>
          <AntdForm.Item
            key={field.prop}
            rules={field.rules}
            label={field.label}
            name={field.prop}
          >
            <Component {...field} />
          </AntdForm.Item>
        </Col>
      );
    });
  };
  return <Row gutter={12}>{renderFields()}</Row>;
}
