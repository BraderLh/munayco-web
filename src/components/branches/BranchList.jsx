"use client";

import { BranchOfficeCard } from "./BranchOfficeCard";
import { EmptyState, ErrorState, LoadingState } from "@/components/ui/AsyncState";
import { useApiCollection } from "@/hooks/useApiCollection";
import { getBranchesFromFixture } from "@/services/offices";

const BranchList = () => {
  const { data: branchList, status, error, retry } = useApiCollection(
    getBranchesFromFixture
  );

  if (status === "loading") {
    return <LoadingState label="Cargando sucursales..." />;
  }

  if (status === "error") {
    return <ErrorState error={error} onRetry={retry} />;
  }

  if (branchList.length === 0) {
    return <EmptyState message="No hay sucursales disponibles." />;
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {branchList.map((branch) => (
        <BranchOfficeCard
          branch={branch}
          key={branch.branchOfficesId ?? branch.branchOfficeId ?? branch.address}
        />
      ))}
    </div>
  );
};

export default BranchList;
