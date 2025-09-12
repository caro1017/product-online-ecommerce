import { Avatar, Badge, IconButton } from "@mui/material";
import { NavBar } from "../../layout/NavBar/NavBar";
import { TabsProfile } from "./Sections/TabsProfile";
import { useEcommerce } from "../../../service/EcommerceContext";

export const ProfilePage = () => {
  const { user } = useEcommerce();

  // Si no hay usuario, mostrar un mensaje o redirigir
  if (!user) {
    return (
      <div>
        <NavBar />
        <p className="text-center mt-[300px]">
          Por favor, inicia sesión para ver tu perfil.
        </p>
      </div>
    );
  }
  
  return (
    <>
      <NavBar />
      <div className="justify-center px-4 py-20 md:flex lg:space-x-20 md:space-x-10 md:py-48">
        <div className="flex flex-col items-center mb-10 md:mb-0">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <IconButton className="transition duration-700 bg-salmon hover:bg-yellow">
                <i className="text-white bx bxs-edit-alt" />
              </IconButton>
            }
          >
            <Avatar
              alt={`${user.usuario}`}
              src=""
              className="w-44 h-44"
            />
          </Badge>
          <div className="mt-5 lg:text-center">
            <p className="font-bold">{`${user.usuario}`}</p>
            
          </div>
        </div>

        <div className="md:w-[35rem]">
          <TabsProfile />
        </div>
      </div>
    </>
  );
};
