/**
 * El componente `RegisteredPage` representa la página para iniciar sesión o registrarse.
 *
 * @returns {JSX.Element} El componente RegisteredPage renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 */
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Images } from "../../images/Images";
import { TabsRegistred } from "./Section/TabsRegistred";

export const RegisteredPage = () => {
  return (
    <>
      <div>
        {/* Componente Link para navegar de regreso a la página de inicio */}
        <Link to="/">
          <IconButton className="lg:m-5 m-5 ">
            <i className="bx bx-arrow-back text-salmon" />
          </IconButton>
        </Link>
        {/* Renderiza el logo */}
        <img
          src={Images.logo}
          alt="logo"
          className="mx-auto w-48 md:w-64 lg:mt-2 "
        />
        {/* Componente cambiar de inicio de sesion a registro */}
        <TabsRegistred />
      </div>
    </>
  );
};
