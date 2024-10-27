// components/Navbar.js
import { Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    
        <Image src="/logo.png" alt="MemoBuddy Logo" width={50} height={50} />
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Navbar;
