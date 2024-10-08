/**
 * Componente DrawerComponent renderiza un componente Drawer para dispositivos móviles.
 *
 * @param {Object} props - Propiedades del componente DrawerComponent.
 * @param {boolean} props.open - Indica si el Drawer está abierto o cerrado.
 * @param {function} props.onClose - Función para cerrar el Drawer.
 * @returns {React.ReactNode} El componente DrawerComponent renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 * Bibliotecas utilizadas: Material-UI (Mui), react-router-dom
 */
import {
  Badge,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { SearchComponent } from "../../../common/SearchComponent/SearchComponent";
import { Images } from "../../../images/Images";

// Ítems del menú de navegación principal
const menuItems = [
  {
    id: uuidv4(),
    title: "Inicio",
    icon: <i className="text-xl bx bx-home-alt" />,
    path: "/",
  },
  {
    id: uuidv4(),
    title: "Productos",
    icon: <i className="text-xl bx bx-list-ul" />,
    path: "/productPage",
  },
  {
    id: uuidv4(),
    title: "Iniciar Sesión",
    icon: <i className="text-xl bx bx-log-in" />,
    path: "/registeredPage",
  },
];

// Ítems de categorías
const categoriesItems = [
  { id: uuidv4(), title: "Moda", icon: <i className="text-xl bx bx-closet" /> },
  {
    id: uuidv4(),
    title: "Tecnologia",
    icon: <i className="text-xl bx bx-laptop" />,
  },
  {
    id: uuidv4(),
    title: "Hogar",
    icon: <i className="text-xl bx bx-home-smile" />,
  },
  { id: uuidv4(), title: "Salud", icon: <i className="text-xl bx bx-spa" /> },
];

// Ítems del usuario
const userItems = [
  {
    id: uuidv4(),
    title: "Favoritos",
    icon: <i className="text-xl bx bx-heart" />,
    path: "/",
  },
  {
    id: uuidv4(),
    title: "Perfil",
    icon: <i className="text-xl bx bx-user" />,
    path: "/profilePage",
  },
  {
    id: uuidv4(),
    title: "Carrito Compras",
    icon: <i className="text-xl bx bx-cart" />,
    cartCount: 3,
    path: "/shoppingCartPage",
  },
];

// Función para generar los ítems de la lista
const generateListItems = (items) =>
  items.map((item) => (
    <ListItem key={item.id || item.title} disablePadding>
      <ListItemButton className="h-10 text-grey hover:text-salmon">
        <Link to={item.path} className="flex">
          <ListItemIcon className="ml-5">{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} className="text-sm font-light" />
          {item.cartCount !== undefined && (
            <Badge
              color="error"
              badgeContent={item.cartCount}
              overlap="circular"
              className="-left-[150px]"
            />
          )}
        </Link>
      </ListItemButton>
    </ListItem>
  ));

// eslint-disable-next-line react/prop-types
const DrawerComponent = ({ open, onClose }) => (
  <Drawer open={open} onClose={onClose} className="lg:hidden">
    <div className="h-auto ">
      <img
        src={Images.logoBN}
        alt="logo"
        className="absolute mx-12 mt-5 w-44"
      />
      <img src={Images.drawerVector} alt="vector" />
    </div>
    <div className="p-2">
      <SearchComponent />
    </div>
    <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
      <List>{generateListItems(menuItems)}</List>
      <Divider />
      <List>{generateListItems(categoriesItems)}</List>
      <Divider />
      <List>{generateListItems(userItems)}</List>
    </Box>
  </Drawer>
);

export default DrawerComponent;
