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
    key: "About",
  },
  {
    label: "Contact",
    key: "Contact",
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState('mail');


  
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
