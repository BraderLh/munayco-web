import React, { useState } from "react";
import { BranchForm } from "./BranchForm";
import { ModalDialog } from "@/components/ui/ModalDialog";

export default function BranchWrapper() {
  // const [branches, setBranches] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const onCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      {/* <button
        type="button"
        className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-base px-5 py-2.5 
          text-center me-2 mb-2 my-auto"
        onClick={() => setOpenModal(true)}
      >
        Agregar local
      </button> */}
      <ModalDialog
        isOpen={openModal}
        onClose={onCloseModal}
        title="Agregar local"
      >
        <BranchForm closeModal={onCloseModal}/>
      </ModalDialog>
    </>
  );
}
