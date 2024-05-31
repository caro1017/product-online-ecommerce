import { Avatar, Badge, IconButton } from "@mui/material";
import { NavBar } from "../../layout/NavBar/NavBar";
import { TabsProfile } from "./Sections/TabsProfile";

export const ProfilePage = () => {
  return (
    <>
      <NavBar />
      <div className="md:flex px-4 lg:space-x-20 md:space-x-10 py-20 md:py-48 justify-center">
        <div className="flex flex-col items-center mb-10 md:mb-0">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <IconButton className="bg-salmon hover:bg-yellow transition duration-700 ">
                <i className="bx bxs-edit-alt text-white" />
              </IconButton>
            }
          >
            <Avatar
              alt="Travis Howard"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-44 h-44"
            />
          </Badge>
          <div className="lg:text-center mt-5">
            <p className="font-bold">Alejandro Grajales</p>
            <p className="text-grey">alejandro@gmail.com</p>
          </div>
        </div>

        <div className="md:w-[35rem]">
          <TabsProfile />
        </div>
      </div>
    </>
  );
};
