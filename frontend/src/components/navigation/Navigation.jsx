"use client";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navigation = () => {
  const auth = useSelector((state) => state.auth);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const authState = sessionStorage.getItem("authState");
    const initialAuth = authState
      ? JSON.parse(authState).isAuthenticated
      : false;
    if (initialAuth) {
      // If we have auth state in sessionStorage, use it immediately
      setHydrated(true);
    }
    //This code might show an error in terminal, but no impact on functionality. We mentioned more about it in notes.pdf(point 4)
    else {
      // Otherwise wait for hydration
      const timeoutId = setTimeout(() => {
        setHydrated(true);
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  if (!hydrated) {
    const authState = sessionStorage.getItem("authState");
    const initialAuth = authState
      ? JSON.parse(authState).isAuthenticated
      : false;
    return <Navbar isAuthenticated={initialAuth} />;
  }

  return (
    <>
      <Navbar isAuthenticated={auth.isAuthenticated} />
    </>
  );
};

export default Navigation;