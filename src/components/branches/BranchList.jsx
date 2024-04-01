import React, { useEffect, useState } from "react";

import { BranchOfficeCard } from "./BranchOfficeCard";
import { getBranches } from "@/services/offices";

const BranchList = () => {
  const [branchList, setBranchList] = useState([]);

  useEffect(() => {
    getBranches().then((data) => {
      setBranchList(data.data);
    });
  }, [branchList]);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 justify-items-center p-2 md:p-4 h-full">
      {branchList && branchList.map((branch) => {
        return (
          <BranchOfficeCard branch={branch} key={branch.branchOfficesId} />
        );
      })}
    </div>
  );
};

export default BranchList;
