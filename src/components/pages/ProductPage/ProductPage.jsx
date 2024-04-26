/**
 * El componente `ProductPage` muestra la página de productos con un carrusel de categorías,
 * opciones de búsqueda y filtros, seguido del pie de página.
 *
 * @returns {JSX.Element} El componente ProductPage renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 */
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
