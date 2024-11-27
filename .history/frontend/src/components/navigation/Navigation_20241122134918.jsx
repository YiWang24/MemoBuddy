import Navbar from "./navbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Navigation = () => {
  const [mounted, setMounted] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    setMounted(true);
    setIsAuth(isAuthenticated);
  }, []);
 

  return (
    <>
      <Navbar isAuthenticated={mounted ? isAuth : isAuthenticated} />
    </>
  );
};

export default Navigation;
