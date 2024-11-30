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
  const [diaryList, setDiaryList] = useState([]);
  const auth = 
  const fetchDiaries = async () => {
    const authD = sessionStorage.getItem("authState");
    const parsedAuth = JSON.parse(authD);
    const promisedData = diaryApi.getDiaries(parsedAuth.user.id);

    promisedData.then((res) => {
      const dataArray = res.data.map((item) => ({
        diaryId: item._id,
        title: item.title,
        content: item.content,
        locked: item.locked,
      }));
      setUserDiaries(dataArray);
    });
  };

  useEffect(() => {
    fetchDiaries();
  }, []);

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
        diaryList={diaryList}
        setNewNote={setNewNote}
        newCheck={newCheck}
        setNewCheck={setNewCheck}
      ></Dashboard>
    </>
  );
}
