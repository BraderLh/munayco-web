import React, { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import { toast } from "sonner";
import { createBranch } from "@/services/offices";

export const BranchForm = ({ closeModal}) => {
  const initialBranch = {
    address: "",
    image: "",
    location: "",
    phone: "",
    telephone: "",
    openingHours: "",
  };

  const [branch, setBranch] = useState(initialBranch);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBranch({ ...branch, [name]: value });
  };

  const [initHour, setInitHour] = useState("");
  const [finalHour, setFinalHour] = useState("");
  const [file, setFile] = useState({});

  branch.openingHours = initHour + "-" + finalHour;
  const urlFile = "/images/local/externo/" + file.name;
  branch.image = urlFile;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataPromise = createBranch(branch);
    console.log('data: ' + dataPromise);
    showToast(dataPromise)
    setBranch(initialBranch);
    closeModal();
  };

  const showToast = (data) => {
    toast.promise(data, {
        loading: 'Creando ...',
        success: (data) => {
          console.log(data);
          return 'Local creado satisfactoriamente';
        },
        error: 'Ocurrió un error '
      }
    )
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="addressId" value="Dirección" />
        </div>
        <TextInput
          id="addressId"
          name="address"
          placeholder="Av. Parmessano 123 o Calle El Vinñero 321, Urb. Manzanas ..."
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="telephoneId" value="Teléfono: " />
        </div>
        <TextInput
          id="telephoneId"
          name="telephone"
          placeholder="4422 ..."
          maxLength={6}
          min={0}
          max={10}
          //value={branch.telephone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phoneId" value="Celular: " />
        </div>
        <TextInput
          id="phoneId"
          name="phone"
          placeholder="912 3..."
          maxLength={9}
          max={10}
          min={0}
          //value={branch.telephone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="locationId"
            value="Coordenadas:"
            className="dark:text-white"
          />
        </div>
        <TextInput
          id="locationId"
          name="location"
          placeholder="JF2V+8J Mariano Melgar ..."
          //value={branch.location}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="horaInicioId"
            value="Horario: "
            className="dark:text-white"
          />
        </div>
        <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mx-3 md:mx-6">
            <select
              id="horaInicioId"
              name="horarioInicio"
              value={initHour}
              onChange={(e) => setInitHour(e.target.value)}
              className="w-auto p-2 mb-2 text-sm text-inherit border 
          border-gray-300 rounded-lg bg-gray-50 focus:ring-lime-500 focus:border-lime-500
           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500
            dark:focus:border-lime-500"
            >
              <option value="00">00</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
            </select>
            <span className="ml-5">am.</span>
          </div>
          <div className="mx-3 md:mx-6">
            <select
              id="horaFinalId"
              name="horarioFinal"
              value={finalHour}
              onChange={(e) => setFinalHour(e.target.value)}
              className="w-auto p-2 mb-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="00">00</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
            </select>
            <span className="ml-5">pm.</span>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="imageId"
            value="Imagen:"
            className="dark:text-white"
          />
        </div>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 
        dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="file_input_image"
          id="imageId"
          name="image"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <p
          className="mt-1 text-sm text-gray-500 dark:text-gray-300"
          id="file_input_help"
        >
          SVG, PNG, JPG or GIF (MAX. 800x400px).
        </p>
      </div>
      <div className="w-full inline">
        <div className="flex justify-between mt-3 md:mt-6">
          <div>
            <button
              type="button"
              onClick={closeModal}
              className="text-white bg-slate-400 hover:bg-slate-500 
              focus:outline-none focus:ring-4 focus:ring-blue-400 
              font-medium rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-slate-700"
            >
              Cancelar
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="text-white bg-orange-400 hover:bg-orange-500 
              focus:outline-none focus:ring-4 focus:ring-amber-400 
              font-medium rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2 
              dark:focus:ring-yellow-900"
            >
              Crear
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
