"use client";
import { usePathname } from "next/navigation";
import React from "react";

const NotFound = () => {
  const pathName = usePathname();
  const pathArr = pathName.split("/");
  console.log(pathArr);

  return (
    <h1>
      Review {pathArr[4]} Not found for product {pathArr[2]}
    </h1>
  );
};

export default NotFound;
