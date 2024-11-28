import Navbar from "./navbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Navigation = () => {
  const auth = useSelector((state) => state.auth);
  const [hydrated, setHydrated] = useState(false);
  const authState = sessionStorage.getItem("authState");
  const initialAuth = authState ? authState.isAuthenticated : false;
  useEffect(() => {
    if (initialAuth) {
      // If we have auth state in sessionStorage, use it immediately
      setHydrated(true);
    } else {
      // Otherwise wait for hydration
      const timeoutId = setTimeout(() => {
        setHydrated(true);
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, []);
  if (!hydrated) {
    const authState = sessionStorage.getItem("authState");
    const initialAuth = authState ? authState.isAuthenticated : false;
    return <Navbar isAuthenticated={initialAuth} />;
  }

  return (
    <>
      <Navbar isAuthenticated={auth.isAuthenticated} />
    </>
  );
};

export default Navigation;