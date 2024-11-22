import Navbar from "./navbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Navigation = () => {
  const [mounted, setMounted] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    const authState = sessionStorage.getItem('authState');
    const initialAuth = authState ? JSON.parse(authState).isAuthenticated : false;
    setMounted(true);
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
