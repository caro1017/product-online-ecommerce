import { AppBar, Toolbar } from "@mui/material";
import { Images } from "../../images/Images";
import { NavBarDesktop } from "./Desktop/NavBarDesktop";
import { NavBarMovil } from "./Movil/NavBarMovil";
import { NavBanner } from "./Desktop/NavBanner";

export const NavBar = () => {
  return (
    <>
      <AppBar className="bg-white fixed top-0 w-full">
        <Toolbar className="flex justify-between lgmx-10">
          <img src={Images.logo} alt="logo" className="w-36 md:w-40" />
          {/* Menu solo para Escritorio */}
          <NavBarDesktop />
          {/* Menu solo para Moviles */}
          <NavBarMovil />
        </Toolbar>
        <NavBanner />
      </AppBar>
    </>
  );
};
