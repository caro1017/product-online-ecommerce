/* eslint-disable react/prop-types */
import { useState } from "react";
import { Checkbox } from "@mui/material";

export const StepContent_2 = ({ handleSelectionChange }) => {
  // Array de objetos representando los métodos de envío
  const shippingMethods = [
    {
      label: "Envio regular",
      price: 0,
      duration: "20 Dias",
    },
    {
      label: "Entrega lo antes posible",
      price: 10000,
      duration: "10 Dias",
    },
    {
      label: "Entrega lo mas rapido posible",
      price: 20000,
      duration: "5 Dias",
    },
  ];

  // Estado para almacenar el índice del método de envío seleccionado
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleOptionSelect = (index) => {
    // Actualizar el estado solo si el método de envío no está seleccionado actualmente
    if (selectedMethod !== index) {
      setSelectedMethod(index);
      handleSelectionChange(index);
      console.log("Método seleccionado:", shippingMethods[index]);
    }
  };

  return (
    <div className="text-black">
      <h2 className="font-semibold mb-5">Selecciona metodo envio</h2>

      {/* Mapear el array de métodos de envío */}
      {shippingMethods.map((method, index) => (
        <div
          key={index}
          className="flex border-solid border-[1px] border-grey/[.30] rounded-lg px-2  md:px-5 py-1 text-grey mb-5 text-sm  md:text-base"
        >
          <Checkbox
            color="error"
            onChange={() => handleOptionSelect(index)}
            checked={selectedMethod === index}
          />
          <p className="mt-2 pr-5 md:pr-36 ">
            {method.price === 0 ? "Gratis" : `$${method.price}`}
          </p>
          <div className="flex justify-between w-full mt-2">
            <p>{method.label}</p>
            <p>{method.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
