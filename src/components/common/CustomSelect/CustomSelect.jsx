/* eslint-disable react/prop-types */
/**
 * Componente CustomSelect renderiza un select personalizado con opciones dinámicas.
 *
 * @param {Object} props - Los props del componente.
 * @param {Array} props.menuItems - Las opciones del select.
 * @param {string} props.initialValue - El valor inicial del select.
 * @param {function} props.onChange - La función que se ejecuta cuando cambia el valor del select.
 * @returns {React.ReactNode} El componente CustomSelect renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 * Paquetes utilizados: Material-UI (Mui) Select, FormControl
 */
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const CustomSelect = ({ menuItems, initialValue, onChange }) => {
  // Función que maneja el cambio en el valor del select
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <>
      {/* Control de formulario para el select */}
      <FormControl
        variant="standard"
        className="lg:min-w-48 min-w-40"
        sx={{ m: 1 }}
      >
        {/* Etiqueta del select */}
        <InputLabel
          id="demo-simple-select-standard-label"
          className="text-grey"
          color="error"
        >
          {initialValue}
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={handleChange}
          label="Age"
          color="error"
          className="text-grey"
          inputProps={{
            name: "age",
            id: "demo-simple-select-standard-label",
          }}
        >
          {/* Renderizado de las opciones del select */}
          {menuItems.map((item) => (
            <MenuItem
              key={item.value}
              value={item.value}
              className="capitalize"
            >
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
