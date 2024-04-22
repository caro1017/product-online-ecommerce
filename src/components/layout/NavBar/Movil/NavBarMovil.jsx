import { useState } from "react";
import { IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import DrawerComponent from "./DrawerComponent";

// eslint-disable-next-line react/prop-types
export const NavBarMovil = () => {
  /* Estado para abrir el Drawer */
  const [open, setOpen] = useState(false);
  /* Funcion para cambiar el estado */
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
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
        <DrawerComponent open={open} onClose={toggleDrawer(false)} />
      </div>
    </>
  );
};
