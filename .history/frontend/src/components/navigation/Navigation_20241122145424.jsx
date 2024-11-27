import Navbar from "./navbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navigation = () => {
  const auth = useSelector((state) => state.auth);
  const [hydrated, setHydrated] = useState(false);

  const getInitialAuth = () => {
    if (typeof window !== "undefined") {
      const authState = sessionStorage.getItem("authState");
      return authState ? JSON.parse(authState).isAuthenticated : false;
    }
    return false;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const initialAuth = getInitialAuth();
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
    }
  }, []);

  if (!hydrated) {
    const initialAuth = getInitialAuth();
    return <Navbar isAuthenticated={initialAuth} />;
  }

  return <Navbar isAuthenticated={auth.isAuthenticated} />;
};

export default Navigation;