import { Button, Checkbox, Form, type FormProps, Input, message } from "antd";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { useNavigate } from "react-router-dom";
import md5 from "js-md5";
import {
  UserOutlined,
  LockOutlined,
  CloseCircleOutlined
} from "@ant-design/icons";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export default (props: any) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const { list } = useAppSelector((store) => store.movie);
  const dispatch = useAppDispatch();
  const onFinish = async (loginForm: any) => {
    console.log(loginForm);

    try {
      setLoading(true);
      localStorage.setItem("token", "123456");
      message.success("登录成功！");
      navigate("/home");
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 5 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      size="large"
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder="用户名：admin / user" prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input.Password
          autoComplete="new-password"
          placeholder="密码：123456"
          prefix={<LockOutlined />}
        />
      </Form.Item>
      <Form.Item className="login-btn">
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          icon={<UserOutlined />}
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};
