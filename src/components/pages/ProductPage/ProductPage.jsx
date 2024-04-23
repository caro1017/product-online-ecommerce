import { NavBar } from "../../layout/NavBar/NavBar";
import { CarouselCategory } from "./Section/CarouselCategory";
import { SearchCategory } from "../HomePage/Sections/SearchCategory";
import { Filters } from "./Section/Filters";
import { FooterBar } from "../../layout/FooterBar/FooterBar";

export const ProductPage = () => {
  return (
    <>
      <NavBar />
      <div className="mt-14 md:mt-16 lg:mt-[6.2rem]">
        <CarouselCategory />
        <SearchCategory />
        <Filters />
      </div>
      <FooterBar />
    </>
  );
};