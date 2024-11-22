// navigation.jsx
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navigation = () => {
  const [hydrated, setHydrated] = useState(false);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    // Check localStorage for auth state first
    const authState = localStorage.getItem('authState');
    const initialAuth = authState ? JSON.parse(authState).isAuthenticated : false;
    
    if (initialAuth) {
      // If we have auth state in localStorage, use it immediately
      setHydrated(true);
    } else {
      // Otherwise wait for hydration
      const timeoutId = setTimeout(() => {
        setHydrated(true);
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  // During initial load, show authenticated navbar if we have auth state
  if (!hydrated) {
    const authState = localStorage.getItem('authState');
    const initialAuth = authState ? JSON.parse(authState).isAuthenticated : false;
    return <Navbar isAuthenticated={initialAuth} />;
  }

  return <Navbar isAuthenticated={auth.isAuthenticated} />;
};

export default Navigation;