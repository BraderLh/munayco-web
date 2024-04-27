'use client';
import { Header } from "@/components/Header";
import React from "react";
import BranchWrapper from "@/components/branches/BranchWrapper";
import BranchList from "@/components/branches/BranchList";

export default function BranchesPage() {
  return (
    <>
      <Header />
      <main className="grid gap-4 grid-flow-row auto-rows-max md:auto-rows-min h-auto">
        <div className="m-4 h-full">
          <section className="rounded-md bg-orange-400 p-4 container mx-auto">
            <h1 className="font-bold text-2xl text-amber-200 mb-4">Locales</h1>
            <p className="bg-orange-300 border border-amber-100 rounded-lg p-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
        </div>
        <div className="flex justify-end mr-[10%]">
          <BranchWrapper />
        </div>
        <div className="container mx-auto w-full">
          <BranchList />
        </div>
        <div>
          <div className="bg-orange-400">
            <section></section>
          </div>
        </div>
      </main>
    </>
  );
}
