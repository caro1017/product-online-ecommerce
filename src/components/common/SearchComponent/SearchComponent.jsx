import { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";

export const SearchComponent = () => {
  /* Estado para controslar la informacion de la busqueda */
  const [searchTerm, setSearchTerm] = useState("");
  /* Funcion que maneja la ligica de la busqueda */
  const handleSearch = () => {
    console.log("Realizar búsqueda con término:", searchTerm);
  };

  return (
    <>
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
