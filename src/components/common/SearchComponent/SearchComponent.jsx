/**
 * Componente SearchComponent renderiza un campo de búsqueda con funcionalidad de búsqueda.
 *
 * @returns {React.ReactNode} El componente SearchComponent renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 * Paquetes utilizados: Material-UI (Mui) TextField, IconButton, InputAdornment
 */
import { useState, useEffect, useRef } from "react";
import {
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  TextField,
} from "@mui/material";
import product from "../../../__mocks__/product.json";

export const SearchComponent = () => {
  //Estado para controlar la información de la búsqueda
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSuggestions([]); // Cerrar el menú de sugerencias si se hace clic fuera
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Obtener un subconjunto aleatorio de sugerencias
  const getRandomSuggestions = () => {
    const shuffledProducts = product.sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, 4).map((product) => product.title);
  };

  const handleTextFieldClick = () => {
    const randomSuggestions = getRandomSuggestions();
    setSuggestions(randomSuggestions);
  };

  // Función que maneja la lógica de la búsqueda
  const handleSearch = (title) => {
    // Realizar la búsqueda utilizando el título seleccionado
    const searchResults = product.filter((product) =>
      product.title.toLowerCase().includes(title.toLowerCase())
    );

    // Redirigir a la página de detalles del primer resultado si hay resultados
    if (searchResults.length > 0) {
      const productId = searchResults[0]._id;
      // Redirección a la página de detalles del producto utilizando Link
      return `/productDetailsPage/${productId}`;
    } else {
      // Manejar el caso en el que no se encuentren resultados
      console.log("No se encontraron resultados para la búsqueda:", title);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filtrar sugerencias del JSON product
    const productSuggestions = product
      .filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      )
      .map((product) => product.title);

    setSuggestions(productSuggestions);
  };

  const handleSuggestionClick = (title) => {
    setSearchTerm(title);
    setSuggestions([]);

    // Llamar a handleSearch con el título seleccionado para obtener la URL de redirección
    const redirectUrl = handleSearch(title);
    // Redirigir utilizando Link
    redirectUrl && window.location.assign(redirectUrl);
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
        onChange={handleInputChange}
        onClick={handleTextFieldClick}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            // Llamar a handleSearch para obtener la URL de redirección
            const redirectUrl = handleSearch();
            // Redirigir utilizando Link
            redirectUrl && window.location.assign(redirectUrl);
          }
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {/* Eliminar la redirección aquí */}
              <IconButton onClick={() => handleSearch(searchTerm)}>
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

      {/* Mostrar sugerencias */}
      {suggestions.length > 0 && (
        <Paper ref={menuRef} className="absolute z-50 lg:mt-20 lg:w-[700px]">
          {suggestions.map((suggestion, index) => (
            <MenuItem
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </MenuItem>
          ))}
        </Paper>
      )}
    </>
  );
};
