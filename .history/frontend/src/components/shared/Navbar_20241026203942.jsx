// components/Navbar.js
import { Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    label: "Home",
    key: "Home",
  },
  {
    label: "About",
    key: "app",
  },
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          { label: "Option 1", key: "setting:1" },
          { label: "Option 2", key: "setting:2" },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          { label: "Option 3", key: "setting:3" },
          { label: "Option 4", key: "setting:4" },
        ],
      },
    ],
  },
  {
    key: "alipay",
    label: (
      
        Navigation Four - Link
      
    ),
  },
];

const Navbar = () => {
  return (
    <div>
      <Image
        src="icons/logo.svg"
        alt="MemoBuddy Logo"
        width={150}
        height={150}
      />
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
};

export default Navbar;
