import React from "react";
import { Header } from "@/components/Header";

export default function HomeLayout({ children }) {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
}
