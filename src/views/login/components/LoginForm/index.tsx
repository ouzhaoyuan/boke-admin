import { Button, Checkbox, Form, type FormProps, Input, message } from "antd";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { useNavigate } from "react-router-dom";
import { loginApi } from "@/api/modules/login";
import "./index.scss";
import {
  UserOutlined,
  LockOutlined,
  CloseCircleOutlined
} from "@ant-design/icons";
import { API } from "@/api/modules/typings";

export default () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const { list } = useAppSelector((store) => store.movie);
  const dispatch = useAppDispatch();
  const onFinish = async (loginForm: API.LoginParams) => {
    try {
      setLoading(true);
      let { data, err } = await loginApi({
        username: loginForm.username,
        password: loginForm.password
      });
      if (err) return;
      localStorage.setItem("token", data!.token);
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
      className="login-form"
      labelCol={{ span: 5 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      size="large"
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "请输入账号" }]}
      >
        <Input placeholder="请输入账号" prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input.Password
          autoComplete="new-password"
          placeholder="请输入密码"
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