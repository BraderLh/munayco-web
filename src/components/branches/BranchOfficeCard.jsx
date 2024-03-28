import React from "react";
import { Card, Dropdown, DropdownItem, Modal, Button } from "flowbite-react";
import { BsGeoAlt } from "react-icons/bs";
import { GiRotaryPhone, GiSmartphone } from "react-icons/gi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { FaFileExport, FaPizzaSlice } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export const BranchOfficeCard = ({ branch }) => {
  const [openFrame, setOpenFrame] = useState(false);
  const separatedCoordinates = branch.location.replace(' ', '').split(',');
  const mapIframeUrl = `https://maps.google.com/maps?q=${separatedCoordinates[0]}, ${separatedCoordinates[1]}&z=18`

  const copyLocation = async () => {
    await navigator.clipboard.writeText(mapIframeUrl)
    toast.success('Dirección copiada');
    setOpenFrame(false);
  }

  return (
    <div className="justify-self-stretch">
      <Card className="max-w-sm bg-orange-50 border border-lime-600 shadow-lime-500">
        <div className="flex justify-end px-4 pt-4">
          <Dropdown inline label="" className="border border-lime-400 bg-lime-100">
            <DropdownItem icon={FaRegEdit} className="hover:bg-lime-200 focus:bg-lime-300">
              <a
                href="#"
                className="block px-4 py-2 text-base text-gray-700 hover:bg-lime-300 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Edit
              </a>
            </DropdownItem>
            <DropdownItem icon={FaFileExport} className="border-t-2 border-b-2 border-lime-400 hover:bg-lime-200 focus:bg-lime-300">
              <a
                href="#"
                className="block px-4 py-2 text-base text-gray-700 hover:bg-lime-300 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Export Data
              </a>
            </DropdownItem>
            <DropdownItem icon={RiDeleteBin6Line} className="hover:bg-lime-200 focus:bg-lime-300">
              <a
                href="#"
                className="block px-4 py-2 text-base text-red-600 hover:bg-lime-300 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Delete
              </a>
            </DropdownItem>
          </Dropdown>
        </div>
        <div className="flex flex-col items-center pb-10">
          <Image
            alt="Bonnie image"
            height={100}
            src={branch.image}
            width={200}
            className="mb-3 rounded-full shadow-lg"
            quality={90}
            style={{
              width: "250px",
              height: "250px",
              borderStyle: "solid",
              borderColor: "#65a30d",
              borderWidth: "medium",
            }}
          />
          <div className="inline-flex m-2">
            <FaPizzaSlice className="my-auto" />
            <h5 className="ml-2 text-md font-medium dark:text-white">
              {branch.address}
            </h5>
          </div>
          <div className="inline-flex m-2">
            <GiRotaryPhone className="my-auto text-lg" />
            <span className="ml-2 text-md text-amber-900 dark:text-gray-200">
              {branch.telephone}
            </span>
            <GiSmartphone className="my-auto ml-4 text-lg" />
            <span className="ml-1 text-md text-amber-900 dark:text-gray-200">
              {branch.phone}
            </span>
          </div>
          <div className="inline-flex m-2">
            <MdOutlineAccessTime className="my-auto text-lg" />
            <span className="inline-block ml-2 text-md text-amber-900 dark:text-gray-200 whitespace">
              De &nbsp; {branch.openingHours.slice(0, 2)} am. &nbsp; a &nbsp;{" "}
              {branch.openingHours.slice(3, branch.openingHours.length)} pm.
            </span>
          </div>
          <div className="inline-flex m-2">
            <BsGeoAlt className="my-auto text-lg" />
            <button
              onClick={() => setOpenFrame(true)}
              className="ml-2 text-md text-amber-900 dark:text-gray-200 hover:underline hover:text-orange-500"
            >
              Ver mapa
            </button>
          </div>
          <Modal show={openFrame} onClose={() => setOpenFrame(false)}>
            <Modal.Header>
              <b className="text-lime-600 text-2xl">Mapa del local</b>
            </Modal.Header>
            <Modal.Body>
              <div className="w-full border-2 border-orange-200 rounded-lg">
                <iframe 
                  width="100%" 
                  loading="lazy"
                  className="h-[350px] md:h-[450px] rounded-lg"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`${mapIframeUrl}&output=embed`}
                >
                </iframe>
              </div>
            </Modal.Body>
            <Modal.Footer className="flex justify-between">
              <Button color="gray" onClick={() => setOpenFrame(false)}>
                Cerrar
              </Button>
              <Button onClick={copyLocation}>
                Copiar dirección
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Card>
    </div>
  );
};
