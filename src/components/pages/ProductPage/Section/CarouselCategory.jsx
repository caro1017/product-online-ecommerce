import brand from "../../../../__mocks__/brand.json";
import { CarouselComponent } from "../../../common/CarouselComponent/CarouselComponent";

export const CarouselCategory = () => {
  // Define los elementos del carrusel
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
