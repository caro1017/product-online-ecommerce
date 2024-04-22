import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";

const categoriesItems = [
  { title: "Moda", icon: <i className="bx bx-closet text-xl" /> },
  { title: "Tecnologia", icon: <i className="bx bx-laptop text-xl" /> },
  { title: "Hogar", icon: <i className="bx bx-home-smile text-xl" /> },
  { title: "Salud", icon: <i className="bx bx-spa text-xl" /> },
];

export const NavBanner = () => {
  return (
    <>
      <div className="hidden lg:block bg-yellow w-full">
        <div className="flex justify-center space-x-10 mx-10">
          {categoriesItems.map((categoriesItems, index) => (
            <MenuItem key={index} className="h-[25px] opacity-75 hover:text-white">
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
