/* eslint-disable react/jsx-key */
/**
 * Componente PopularProduct renderiza una sección de productos populares.
 * Muestra una lista de productos en un carrusel.
 *
 * @returns {React.ReactNode} El componente PopularProduct renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 */
import { CarouselComponent } from "../../../common/CarouselComponent/CarouselComponent";
import { CardFeatured } from "../../../common/Card/CardFeatured";
import brand from "../../../../__mocks__/brand.json";

// Función para generar los elementos del carrusel a partir de los datos de la marca
const generateCarouselItems = () => {
  return brand.map((item, index) => (
    <CardFeatured
      key={index}
      name={item.name}
      description={item.description}
      image={item.images}
      link="/productPage"
    />
  ));
};

export const PopularProduct = () => {
  // Obtener elementos del carrusel
  const carouselItems = generateCarouselItems();

  return (
    <>
      <div className="mt-20">
        {/* Renderizar el carrusel con los elementos */}
        <CarouselComponent items={carouselItems} />
      </div>
    </>
  );
};
