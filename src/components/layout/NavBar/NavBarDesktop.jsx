import { Badge, IconButton, MenuItem } from "@mui/material";
import { SearchComponent } from "../../common/SearchComponent/SearchComponent";

/* Funciones para determinar cada propiedad de los items  */
const menuItems = [
  { title: "Inicio" },
  { title: "Productos" },
  { title: "Categorias" },
  { title: "Iniciar Sesión" },
];

const userIcon = [
  { title: "Favoritos", icon: <i className="bx bx-heart text-2xl" /> },
  { title: "Perfil", icon: <i className="bx bx-user text-2xl" /> },
  {
    title: "Carrito Compras",
    icon: <i className="bx bx-cart text-2xl" />,
    cartCount: 3,
  },
];

export const NavBarDesktop = () => {
  return (
    <>
      <div className="hidden lg:flex w-full ml-24">
        <SearchComponent />
      </div>

      <div className="hidden lg:flex ">
        <div className="flex mx-10">
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              className=" text-grey hover:text-salmon hover:underline hover:underline-offset-8"
            >
              {menuItem.title}
            </MenuItem>
          ))}
        </div>

        <div className="flex">
          {userIcon.map((userIcon, index) => (
            <IconButton key={index} className="text-grey hover:text-yellow">
              {userIcon.icon}
              {userIcon.cartCount !== undefined && (
                <Badge
                  color="error"
                  badgeContent={userIcon.cartCount}
                  overlap="circular"
                  className="-top-2"
                />
              )}
            </IconButton>
          ))}
        </div>
      </div>
    </>
  );
};
