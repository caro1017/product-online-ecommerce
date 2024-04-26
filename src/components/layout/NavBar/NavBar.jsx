/**
 * Componente NavBar renderiza la barra de navegación.
 *
 * @returns {React.ReactNode} El componente NavBar renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 * Bibliotecas utilizadas: Material-UI (Mui)
 */
import { AppBar, Toolbar } from "@mui/material";
import { Images } from "../../images/Images";
import { NavBarDesktop } from "./Desktop/NavBarDesktop";
import { NavBarMovil } from "./Movil/NavBarMovil";
import { NavBanner } from "./Desktop/NavBanner";

export const NavBar = () => {
  return (
    <>
      {/* Barra de navegación */}
      <AppBar className="bg-white fixed top-0 w-full">
        <Toolbar className="flex justify-between lgmx-10">
          <img src={Images.logo} alt="logo" className="w-36 md:w-40" />
          {/* Menu solo para Escritorio */}
          <NavBarDesktop />
          {/* Menu solo para Moviles */}
          <NavBarMovil />
        </Toolbar>
        {/* Banner de navegación */}
        <NavBanner />
      </AppBar>
    </>
  );
};
