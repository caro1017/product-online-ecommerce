/**
 * El componente `CarouselCategory` muestra un carrusel de imágenes de marcas.
 *
 * @returns {JSX.Element} El componente CarouselCategory renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 */
import brand from "../../../../__mocks__/brand.json";
import { CarouselComponent } from "../../../common/CarouselComponent/CarouselComponent";

export const CarouselCategory = () => {
  // Define los elementos del carrusel utilizando los datos de la marca
  const carouselItems = brand.map((item, index) => (
    <img
      key={index}
      src={item.images[1]}
      alt={item.name}
      className=" md:h-[26rem] h-[20rem] w-full"
    />
  ));

  return (
    <>
      <CarouselComponent items={carouselItems} />
    </>
  );
};
