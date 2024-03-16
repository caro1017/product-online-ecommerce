/* eslint-disable react/jsx-key */
import { CarouselComponent } from "../../../common/CarouselComponent/CarouselComponent";
import { CardFeatured } from "../../../common/Card/CardFeatured";

export const PopularProduct = () => {
  // Define los elementos del carrusel
  const carouselItems = [
    <div>
      <CardFeatured />
    </div>,
    <div>
      <CardFeatured />
    </div>,
    <div>
      <CardFeatured />
    </div>,
    <div>
      <CardFeatured />
    </div>,
    
  ];

  return (
    <>
      <div className="my-20">
        <CarouselComponent items={carouselItems} />
      </div>
    </>
  );
};
