import { BannerHeader } from "./Sections/BannerHeader";
import { NavBar } from "../../layout/NavBar/NavBar";
import { SearchCategory } from "./Sections/SearchCategory";
import { TabsHome } from "./Sections/TabsHome";
import { FooterBar } from "../../layout/FooterBar/FooterBar";
import { PopularProduct } from "./Sections/PopularProduct";

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="mt-14 md:mt-16 lg:mt-[6.2rem] mb-5">
        <BannerHeader />
        <SearchCategory />
        <TabsHome />
        <PopularProduct />
      </div>
      <FooterBar />
    </>
  );
};
