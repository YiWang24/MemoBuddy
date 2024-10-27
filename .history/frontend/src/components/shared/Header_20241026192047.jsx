// components/Navbar.js
import { Layout, Menu } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="logo" style={{ color: 'white', fontWeight: 'bold', marginRight: '20px' }}>
        MyLogo
        <Image src="">
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key="home">
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link href="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="services">
          <Link href="/services">Services</Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link href="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
