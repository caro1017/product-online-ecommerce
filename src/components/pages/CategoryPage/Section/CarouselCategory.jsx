import brand from "../../../../__mocks__/brand.json";
import { CarouselComponent } from "../../../common/CarouselComponent/CarouselComponent";

export const CarouselCategory = () => {
  // Define los elementos del carrusel
  const carouselItems = brand.map((item, index) => (
    <img
      key={index}
      src={item.images[1]}
      alt={item.name}
      className=" h-[29rem] w-[35rem]"
    />
  ));

  return (
    <>
      <CarouselComponent items={carouselItems} />
    </>
  );
};
