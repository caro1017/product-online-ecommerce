/* eslint-disable react/jsx-key */
import { CarouselComponent } from "../../../common/CarouselComponent/CarouselComponent";
import { CardFeatured } from "../../../common/Card/CardFeatured";
import brand from "../../../../__mocks__/brand.json";

export const PopularProduct = () => {
  // Define los elementos del carrusel
  const carouselItems = brand.map((item, index) => (
    <CardFeatured
      key={index}
      name={item.name}
      description={item.description}
      image={item.images}
    />
  ));

  return (
    <>
      <div className="mt-20">
        <CarouselComponent items={carouselItems} />
      </div>
    </>
  );
};
