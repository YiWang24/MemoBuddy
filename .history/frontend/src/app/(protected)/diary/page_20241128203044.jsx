"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCheckUser } from "@/lib/features/auth/authSlice";
import { useSearchParams } from "next/navigation";
import Dashboard from "../../../components/Dashboard/Dashboard";

export default function dashboard() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const [newNote, setNewNote] = useState("");
  const [newCheck, setNewCheck] = useState(false);

  useEffect(() => {
    const params = {
      googleId: searchParams.get("googleId"),
      email: searchParams.get("email"),
    };
    if (params.googleId && params.email) {
      dispatch(fetchCheckUser(params));
    }
  }, [searchParams]);

  return (
    <>
      <Dashboard
        newNote={newNote}
        setNewNote={setNewNote}
        newCheck={newCheck}
        setNewCheck={setNewCheck}
      ></Dashboard>
    </>
  );
}
