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
import { SearchComponent } from "../../../common/SearchComponent/SearchComponent";
import { Images } from "../../../images/Images";

/* Funciones para determinar cada propiedad de los items  */
const menuItems = [
  {
    title: "Inicio",
    icon: <i className="bx bx-home-alt text-xl" />,
    path: "/",
  },
  {
    title: "Productos",
    icon: <i className="bx bx-list-ul text-xl" />,
    path: "/",
  },
  {
    title: "Categorias",
    icon: <i className="bx bx-category text-xl" />,
    path: "/categoryPage",
  },
  {
    title: "Iniciar Sesión",
    icon: <i className="bx bx-log-in text-xl" />,
    path: "/registeredPage",
  },
];

const categoriesItems = [
  { title: "Moda", icon: <i className="bx bx-closet text-xl" /> },
  { title: "Tecnologia", icon: <i className="bx bx-laptop text-xl" /> },
  { title: "Hogar", icon: <i className="bx bx-home-smile text-xl" /> },
  { title: "Salud", icon: <i className="bx bx-spa text-xl" /> },
];

const userItems = [
  { title: "Favoritos", icon: <i className="bx bx-heart text-xl" /> },
  { title: "Perfil", icon: <i className="bx bx-user text-xl" /> },
  {
    title: "Carrito Compras",
    icon: <i className="bx bx-cart text-xl" />,
    cartCount: 3,
  },
];

/* Funcion para generar los items del menu */
const generateListItems = (items) =>
  items.map((item) => (
    <ListItem key={item.title} disablePadding>
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
    <div className=" h-auto">
      <img
        src={Images.logoBN}
        alt="logo"
        className="absolute w-44 mx-12 mt-5"
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
