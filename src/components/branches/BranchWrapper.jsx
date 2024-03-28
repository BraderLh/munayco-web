import React, { useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import { BranchForm } from "./BranchForm";
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export default function BranchWrapper() {
  // const [branches, setBranches] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const onCloseModal = () => {
    setOpenModal(false);
  };

  // const addBranch = (branch) => {
  //   setBranches([...branches, { id: uuidv4(), boffice: branch }]);
  //   console.log(branches);
  // };
  return (
    <>
      <button
        type="button"
        className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-base px-5 py-2.5 
          text-center me-2 mb-2 dark:focus:ring-yellow-900 my-auto"
        onClick={() => setOpenModal(true)}
      >
        Agregar local
      </button>
      <Modal
        id="createBranchModal"
        show={openModal}
        size="xl"
        onClose={onCloseModal}
        popup
      >
        <Modal.Header>
          <b className="text-xl font-medium text-lime-700 dark:text-white">
            Agregar local
          </b>
        </Modal.Header>
        <Modal.Body>
          <BranchForm closeModal={onCloseModal}/>
        </Modal.Body>
      </Modal>
    </>
  );
}
