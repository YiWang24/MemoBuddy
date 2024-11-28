import Navbar from "./navbar";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [mounted, setMounted] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <Navbar onMount={handleNavbarMount} isAuthenticated={isAuthenticated} />; // 骨架屏
  }

  return (
    <>
      <Navbar onMount={handleNavbarMount} isAuthenticated={isAuthenticated} />
    </>
  );
};

export default Navigation;