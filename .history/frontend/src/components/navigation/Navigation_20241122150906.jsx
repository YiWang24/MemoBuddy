"use client";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navigation = () => {
  const auth = useSelector((state) => state.auth);
  const [hydrated, setHydrated] = useState(false);

//   useEffect(() => {
//     const authState = sessionStorage.getItem("authState");

//     console.log(authState);
//     const initialAuth = authState
//       ? JSON.parse(authState).isAuthenticated
//       : false;
//     if (initialAuth) {
//       // If we have auth state in sessionStorage, use it immediately
//       setHydrated(true);
//     } else {
//       // Otherwise wait for hydration
//       const timeoutId = setTimeout(() => {
//         setHydrated(true);
//       }, 100);
//       return () => clearTimeout(timeoutId);
//     }
//   }, []);

  if (!hydrated) {
    const authState = useSelector
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