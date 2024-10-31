"use client"; // Ensure this runs as a Client Component
import { makeStore } from "@/lib/store";
import { useRef } from "react";
import { Provider } from "react-redux";
import {}
export default function StoreProvider({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
