import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  LoginForm,
  ProConfigProvider,
  ProFormText,
} from "@ant-design/pro-components";
import { Space, Tabs, theme } from "antd";
import { useState } from "react";

export default () => {
  const { token } = theme.useToken();

  return (
    <ProConfigProvider hashed={false}>
      <div style={{ backgroundColor: token.colorBgContainer }}>
        <LoginForm
          logo="./icons/logo.svg"
          title="MemoBuddy"
          subTitle="Tech Army"
        >
          <Tabs.TabPane key={"account"} tab={"账号密码登录"} />

          <ProFormText
            name="username"
            fieldProps={{
              size: "large",
              prefix: <UserOutlined className={"prefixIcon"} />,
            }}
            placeholder={"用户名: admin or user"}
            rules={[
              {
                required: true,
                message: "请输入用户名!",
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
              statusRender: (value) => {
                const getStatus = () => {
                  if (value && value.length > 12) {
                    return "ok";
                  }
                  if (value && value.length > 6) {
                    return "pass";
                  }
                  return "poor";
                };
                const status = getStatus();
                if (status === "pass") {
                  return (
                    <div style={{ color: token.colorWarning }}>强度：中</div>
                  );
                }
                if (status === "ok") {
                  return (
                    <div style={{ color: token.colorSuccess }}>强度：强</div>
                  );
                }
                return <div style={{ color: token.colorError }}>强度：弱</div>;
              },
            }}
            placeholder={"密码: ant.design"}
            rules={[
              {
                required: true,
                message: "请输入密码！",
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
    </ProConfigProvider>
  );
};
