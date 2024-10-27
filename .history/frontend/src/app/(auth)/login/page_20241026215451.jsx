"use client";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  LoginForm,
  ProConfigProvider,
  ProFormText,
} from "@ant-design/pro-components";
import LoginButton from "@/components/auth/LoginButton";
import { Tabs, theme } from "antd";
import {GoogleOutlined,MailOutlined } from "@ant-design/icons/GoogleOutlined";

export default () => {
  const { token } = theme.useToken();

  return (
    <ProConfigProvider hashed={false}>
      <div style={{ backgroundColor: token.colorBgContainer }}>
        <LoginForm title="MemoBuddy" subTitle="Tech Army">
          <Tabs.TabPane key={"account"} tab={"账号密码登录"} />

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
      <LoginButton
        icon={GoogleOutlined}
        onClick={handleGoogleLogin}
        text="Sign in with Google"
      />
       <LoginButton icon={GoogleOutlined} onClick={handleGoogleLogin} text="Sign in with email" />
    </ProConfigProvider>
  );
};
