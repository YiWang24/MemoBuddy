"use client";

import LoginButton from "../../../components/auth/LoginButton";
import { Tabs, theme } from "antd";
import socialMedia from "../../../constants";

export default () => {
  const { token } = theme.useToken();
  const handleGoogleLogin = () => {};
  const handleMailLogin = () => {};

  return (
    <ProConfigProvider hashed={false}>
      {/* <div style={{ backgroundColor: token.colorBgContainer }}>
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
      </div> */}
      <div>
        {/* <LoginButton imgURL={socialMedia[0].src} alt={socialMedia[0].alt} />
        <LoginButton imgURL={socialMedia[1].src} alt={socialMedia[1].alt} /> */}
      </div>
    </ProConfigProvider>
  );
};
