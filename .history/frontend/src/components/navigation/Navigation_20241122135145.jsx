import Navbar from "./navbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Navigation = () => {
  const [mounted, setMounted] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    setMounted(true);
    setIsAuth(isAuthenticated);
  }, []);
  if (!mounted) {
    return <Navbar />;
  }

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
    </>
  );
};

export default Navigation;
