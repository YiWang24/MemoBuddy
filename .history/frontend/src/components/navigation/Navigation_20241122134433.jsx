import Navbar from "./navbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Navigation = () => {
  const [mounted, setMounted] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <Navba r />; // 骨架屏
  }

  return (
    <>
      <Navbar />
    </>
  );
};

export default Navigation;
