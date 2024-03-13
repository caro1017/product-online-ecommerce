import { AppBar, Toolbar } from "@mui/material";
import { Images } from "../../images/Images";
import { NavBarDesktop } from "./NavBarDesktop";
import { NavBarMovil } from "./NavBarMovil";
import { NavBanner } from "./NavBanner";

export const NavBar = () => {
  return (
    <>
      <AppBar className="bg-white fixed top-0 w-full z-50">
        <Toolbar className="flex justify-between lgmx-10">
          <Images imageName="logo.svg" className="w-36 md:w-40" />
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
