import Navbar from "./navbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Navigation = () => {
  const [mounted, setMounted] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    
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
