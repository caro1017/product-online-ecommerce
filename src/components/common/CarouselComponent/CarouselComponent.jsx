/* eslint-disable react/prop-types */
/**
 * Componente CarouselComponent renderiza un carrusel de elementos con el paquete react-multi-carousel.
 *
 * @param {Object} props - Los props del componente.
 * @param {React.ReactNode[]} props.items - Los elementos a mostrar en el carrusel.
 * @returns {React.ReactNode} El componente CarouselComponent renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 * Paquete utilizado: react-multi-carousel
 */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const CarouselComponent = ({ items }) => {
  // Configuración de la respuesta del carrusel
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={2000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {/* Renderizado de los elementos del carrusel */}
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Carousel>
    </>
  );
};
