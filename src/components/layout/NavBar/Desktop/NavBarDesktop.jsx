/**
 * Componente NavBarDesktop renderiza la barra de navegación para pantallas de escritorio.
 *
 * @returns {React.ReactNode} El componente NavBarDesktop renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 * Bibliotecas utilizadas: react-router-dom, Material-UI (Mui)
 */
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Badge, IconButton, MenuItem } from "@mui/material";
import { SearchComponent } from "../../../common/SearchComponent/SearchComponent";

/* Funciones para determinar cada propiedad de los items  */
const menuItems = [
  { id: uuidv4(), title: "Inicio", path: "/" },
  { id: uuidv4(), title: "Productos", path: "/productPage" },
  { id: uuidv4(), title: "Iniciar Sesión", path: "/registeredPage" },
];

const userIcon = [
  {
    id: uuidv4(),
    title: "Favoritos",
    icon: <i className="bx bx-heart text-2xl" />,
    path: "/shoppingCartPage",
  },
  {
    id: uuidv4(),
    title: "Perfil",
    icon: <i className="bx bx-user text-2xl" />,
    path: "/shoppingCartPage",
  },
  {
    id: uuidv4(),
    title: "Carrito Compras",
    icon: <i className="bx bx-cart text-2xl" />,
    cartCount: 3,
    path: "/shoppingCartPage",
  },
];

export const NavBarDesktop = () => {
  return (
    <>
      {/* Barra de búsqueda en la parte izquierda */}
      <div className="hidden lg:flex w-full ml-24">
        <SearchComponent />
      </div>

      {/* Menú de navegación y elementos del usuario en la parte derecha */}
      <div className="hidden lg:flex ">
        <div className="flex mx-10">
          {menuItems.map((menuItem) => (
            <MenuItem
              key={menuItem.id}
              className=" text-grey hover:text-yellow "
            >
              <Link to={menuItem.path}>{menuItem.title}</Link>
            </MenuItem>
          ))}
        </div>

        {/* Íconos del usuario */}
        <div className="flex">
          {userIcon.map((userIcon) => (
            <Link key={userIcon.id} to={userIcon.path}>
              <IconButton className="text-grey hover:text-yellow">
                {userIcon.icon}
                {/* Contador del carrito de compras si está definido */}
                {userIcon.cartCount !== undefined && (
                  <Badge
                    color="error"
                    badgeContent={userIcon.cartCount}
                    overlap="circular"
                    className="-top-2"
                  />
                )}
              </IconButton>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
