/**
 * Componente NavBanner renderiza un banner de navegación con categorías.
 *
 * @returns {React.ReactNode} El componente NavBanner renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 * Bibliotecas utilizadas: Material-UI (Mui)
 */
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";

// Ítems de categorías con iconos correspondientes
const categoriesItems = [
  { title: "Moda", icon: <i className="bx bx-closet text-xl" /> },
  { title: "Tecnologia", icon: <i className="bx bx-laptop text-xl" /> },
  { title: "Hogar", icon: <i className="bx bx-home-smile text-xl" /> },
  { title: "Salud", icon: <i className="bx bx-spa text-xl" /> },
];

export const NavBanner = () => {
  return (
    <>
      {/* Banner de navegación visible solo en pantallas grandes */}
      <div className="hidden lg:block bg-yellow w-full">
        <div className="flex justify-center space-x-10 mx-10">
          {/* Mapeo de ítems de categorías */}
          {categoriesItems.map((categoriesItems, index) => (
            <MenuItem
              key={index}
              className="h-[25px] opacity-75 hover:text-white"
            >
              <ListItemIcon className=" text-white">
                {categoriesItems.icon}
              </ListItemIcon>
              <ListItemText>{categoriesItems.title}</ListItemText>
            </MenuItem>
          ))}
        </div>
      </div>
    </>
  );
};
