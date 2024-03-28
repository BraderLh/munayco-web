import React from "react";
import { Toaster } from "sonner";

export default function BranchOfficeLayout({ children }) {
  return (
    <>
      {children}
      <Toaster
        richColors
        toastOptions={{
          duration: 5000,
        }}
      />
    </>
  );
}
