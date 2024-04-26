/**
 * La página de inicio renderiza la barra de navegación, el encabezado del banner,
 * la búsqueda por categorías, las pestañas de productos, los productos populares
 * y la barra de pie de página.
 *
 * @returns {React.ReactNode} El componente de la página de inicio renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 */
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
