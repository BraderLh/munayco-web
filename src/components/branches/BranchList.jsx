import React, { useEffect, useState } from "react";

import { BranchOfficeCard } from "./BranchOfficeCard";
import { getBranches, getBranchesFromFile } from "@/services/offices";
import locales from '../../data/locales.json';

const BranchList = () => {
  const [branchList, setBranchList] = useState([]);
  // From API consuming
  // useEffect(() => {
  //   getBranches().then((data) => {
  //     setBranchList(data.data);
  //   });
  // }, []);
  //Data from jsonFile
  useEffect(() => {
    setBranchList(locales.data)
  }, [])
  
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 justify-items-center p-2 md:p-4 h-full ml-3 md:ml-auto">
      {branchList && branchList.map((branch) => {
        return (
          <BranchOfficeCard branch={branch} key={branch.branchOfficesId} />
        );
      })}
    </div>
  );
}

export default BranchList;
