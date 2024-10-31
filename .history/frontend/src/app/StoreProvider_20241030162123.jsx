"use client"; // Ensure this runs as a Client Component
import { useRef } from 'react';

import { Provider } from "react-redux";
import { store } from "../../store"; // import your Redux store

export default function StoreProvider({ children }) {
  const storeRef = useRef();

}
