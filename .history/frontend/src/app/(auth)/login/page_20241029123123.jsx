"use client";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  LoginForm,
  ProConfigProvider,
  ProFormText,
} from "@ant-design/pro-components";
import LoginButton from "../../../components/auth/LoginButton";
import { Space, Tabs, theme } from "antd";
import { MailFilled } from "@ant-design/icons";
import socialMedia from "../../../constants";

export default () => {
  const { token } = theme.useToken();
  const handleGoogleLogin = () => {};
  const handleMailLogin = () => {};

  return (
    <ProConfigProvider hashed={false}>
      <div style={{ backgroundColor: token.colorBgContainer }}>
        <LoginForm title="MemoBuddy" subTitle="Tech Army">
          <Tabs.TabPane key={"account"} tab={"Login"} />

          <ProFormText
            name="username"
            fieldProps={{
              size: "large",
              prefix: <UserOutlined className={"prefixIcon"} />,
            }}
            placeholder={"username: admin or user"}
            rules={[
              {
                required: true,
                message: "please input username",
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: "large",
              prefix: <LockOutlined className={"prefixIcon"} />,
              strengthText:
                "Password should contain numbers, letters and special characters, at least 8 characters long.",
            }}
            placeholder={"password: ant.design"}
            rules={[
              {
                required: true,
                message: "please input password",
              },
            ]}
          />

          <div
            style={{
              marginBlockEnd: 24,
            }}
          ></div>
        </LoginForm>
      </div>
      <div>
        <LoginButton imgURL={socialMedia.}/>
      </div>
    </ProConfigProvider>
  );
};
