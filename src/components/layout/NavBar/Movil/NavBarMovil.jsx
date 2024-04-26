/**
 * Componente NavBarMovil renderiza la barra de navegación para dispositivos móviles.
 *
 * @returns {React.ReactNode} El componente NavBarMovil renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 * Bibliotecas utilizadas: Material-UI (Mui), React
 */
import { useState } from "react";
import { IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import DrawerComponent from "./DrawerComponent";

// eslint-disable-next-line react/prop-types
export const NavBarMovil = () => {
  // Estado para abrir el Drawer
  const [open, setOpen] = useState(false);

  // Función para cambiar el estado del Drawer
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      {/* Botón de menú para abrir el Drawer */}
      <div className="lg:hidden">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          className="text-yellow"
          onClick={toggleDrawer(true)}
        >
          <Menu />
        </IconButton>
        {/* Componente Drawer para dispositivos móviles */}
        <DrawerComponent open={open} onClose={toggleDrawer(false)} />
      </div>
    </>
  );
};
