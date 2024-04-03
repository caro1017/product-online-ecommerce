import { IconButton } from "@mui/material";
import { Images } from "../../images/Images";
import { TabsRegistred } from "./Section/TabsRegistred";
import { Link } from "react-router-dom";

export const RegisteredPage = () => {
  return (
    <>
      <div>
        <Link to="/">
          <IconButton className="lg:m-5 m-5 ">
            <i className="bx bx-arrow-back text-salmon" />
          </IconButton>
        </Link>
        <img
          src={Images.logo}
          alt="logo"
          className="mx-auto w-48 md:w-64 lg:mt-2 "
        />
        <TabsRegistred />
      </div>
    </>
  );
};
