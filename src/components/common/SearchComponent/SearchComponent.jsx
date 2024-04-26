/**
 * Componente SearchComponent renderiza un campo de búsqueda con funcionalidad de búsqueda.
 *
 * @returns {React.ReactNode} El componente SearchComponent renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 * Paquetes utilizados: Material-UI (Mui) TextField, IconButton, InputAdornment
 */
import { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";

export const SearchComponent = () => {
  //Estado para controlar la información de la búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Función que maneja la lógica de la búsqueda
  const handleSearch = () => {
    console.log("Realizar búsqueda con término:", searchTerm);
  };

  return (
    <>
      {/* Campo de texto de búsqueda */}
      <TextField
        label="Buscar"
        variant="filled"
        color="warning"
        className="w-full my-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <i className="bx bx-search-alt-2 text-yellow" />
              </IconButton>
            </InputAdornment>
          ),
          style: {
            fontWeight: 300,
          },
        }}
        InputLabelProps={{
          style: {
            color: "#434043",
            fontSize: "14px",
            fontWeight: 400,
          },
        }}
      />
    </>
  );
};
