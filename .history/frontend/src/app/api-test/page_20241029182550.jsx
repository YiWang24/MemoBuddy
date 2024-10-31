"use client";
import React, { useEffect, useState } from "react";
const Page = () => {

  return (
    <div>
      <h1>API Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Page;
