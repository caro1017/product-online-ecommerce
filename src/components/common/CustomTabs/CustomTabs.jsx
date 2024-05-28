/* eslint-disable react/prop-types */
/**
 * Componente CustomTabs renderiza un conjunto de pestañas personalizadas con contenido dinámico.
 *
 * @param {Object} props - Los props del componente.
 * @param {Array} props.tabs - Las pestañas a mostrar, cada una con un título y contenido.
 * @returns {React.ReactNode} El componente CustomTabs renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 * Paquetes utilizados: Material-UI (Mui) Tabs, Emotion
 */
import { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import styled from "@emotion/styled";

// Estilización de los Tabs utilizando Emotion
const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#D0665B",
    height: "1.5px",
  },
});

export const CustomTabs = ({ tabs }) => {
  // Estado para mantener el valor de la pestaña seleccionada
  const [value, setValue] = useState(0);

  // Función para manejar el cambio de pestaña
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div>
        {/* Contenedor de las pestañas */}
        <div>
          {/* Tabs personalizados */}
          <AntTabs
            value={value}
            onChange={handleChange}
            aria-label="Custom Tabs"
            textColor="inherit"
          >
            {/* Renderizado de las pestañas */}
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                label={tab.title}
                className="text-salmon normal-case text-[14px] md:text-base font-normal"
              />
            ))}
          </AntTabs>
        </div>
        {/* Contenido de las pestañas */}
        <div className=" mx-auto">
          {tabs.map((tab, index) => (
            <div
              key={index}
              style={{ display: value === index ? "block" : "none" }}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
