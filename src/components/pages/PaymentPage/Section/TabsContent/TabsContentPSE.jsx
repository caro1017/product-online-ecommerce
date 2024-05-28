/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { CustomSelect } from "../../../../common/CustomSelect/CustomSelect";
import { CustomButtons } from "../../../../common/CustomButtons/CustomButtons";

export const TabsContentPSE = ({ image }) => {
  // Estados locales para los bancos
  const [selectedBank, setSelectedBank] = useState(null);

  // Función para manejar el cambio de filtro de banco
  const handlebankChange = (value) => {
    setSelectedBank(value);
    console.log(value);
  };

  const bankNames = [
    { value: 1, label: "Banco de Bogotá" },
    { value: 2, label: "Bancolombia" },
    { value: 3, label: "Banco Davivienda" },
    { value: 4, label: "Banco de Occidente" },
    { value: 5, label: "Banco Popular" },
    { value: 6, label: "Banco AV Villas" },
    { value: 7, label: "BBVA Colombia" },
    { value: 8, label: "Citibank Colombia" },
    { value: 9, label: "Banco GNB Sudameris" },
    { value: 10, label: "Scotiabank Colpatria" },
  ];

  return (
    <div>
      <div className="w-28 mb-8 overflow-visible">
        <img src={image} alt="Imagen referencia tarjeta" />
      </div>
      <div>
        <CustomSelect
          initialValue="Seleccionar banco"
          menuItems={bankNames}
          onChange={handlebankChange}
        />
      </div>
    </div>
  );
};
