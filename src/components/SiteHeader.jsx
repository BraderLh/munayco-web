"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";

export function SiteHeader() {
  const pathname = usePathname();

  if (pathname?.startsWith("/auth")) {
    return null;
  }

  return <Header />;
}
