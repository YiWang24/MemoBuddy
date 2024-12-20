"use client";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  LoginForm,
  ProConfigProvider,
  ProFormText,
} from "@ant-design/pro-components";
import LoginButton from "../../../components/auth/LoginButton";
import { Space, Tabs, theme } from "antd";
import { GoogleOutlined, MailFilled } from "@ant-design/icons";
const GoogleIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M23.788 12.027c0 .55-.043 1.042-.143 1.575h-12.42v5.962h7.438c-.416 2.324-2.386 4.046-5.187 4.046-3.052 0-5.51-2.606-5.51-5.828 0-3.223 2.458-5.828 5.51-5.828 1.509 0 2.857.576 3.897 1.54 1.22-1.095 3.008-1.815 4.935-1.815 4.03 0 7.347 3.019 7.347 6.986v2.79h-6.074v-.067c0-1.342-1.134-2.538-2.477-2.538-1.343 0-2.477 1.196-2.477 2.538z"
        fill="#4285F4"
      />
      <path
        d="M11.896 18.079c0-2.26 1.746-4.072 4.005-4.072 1.33 0 2.538.645 3.285 1.642l.033-.006v-1.3c-.926-.553-2.052-.883-3.285-.883-3.031 0-5.51 2.606-5.51 5.828 0 3.223 2.479 5.828 5.51 5.828 1.233 0 2.353-.33 3.285-.883l-.033-1.3c-.747 1-1.955 1.642-3.285 1.642-2.258 0-4.005-1.812-4.005-4.072z"
        fill="#34A853"
      />
      <path
        d="M0 12.028c0-2.676 1.556-5.293 4.06-7.101C1.783 5.145 0 8.023 0 12.028s1.783 6.883 4.06 7.101C1.556 17.321 0 14.704 0 12.028z"
        fill="#FBBC05"
      />
      <path
        d="M4.06 4.927C1.556 6.736 0 9.353 0 12.028c0 2.676 1.556 5.293 4.06 7.101C2.215 15.67 0 13.573 0 12.028s1.783-6.883 4.06-7.101z"
        fill="#EA4335"
      />
    </svg>
  );
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
      <Space>
        <LoginButton
          icon={<GoogleOutlined />}
          onClick={handleGoogleLogin}
          text="Sign in with Google"
        />
        <LoginButton
          icon={<MailFilled />}
          onClick={handleMailLogin}
          text="Sign in with email"
        />
      </Space>
    </ProConfigProvider>
  );
};
