"use client"; // Ensure this runs as a Client Component
import { makeStore } from '@/lib/store';
import { useRef } from 'react';
import { Provider } from "react-redux";

export default function StoreProvider({ children }) {
  const storeRef = useRef();
  if(!storeRef.current) {
    storeRef.current = makeStore
  }

}
