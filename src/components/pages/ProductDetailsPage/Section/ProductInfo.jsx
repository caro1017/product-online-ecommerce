/* eslint-disable react/prop-types */
/**
 * El componente `ProductInfo` muestra la información detallada de un producto,
 * incluyendo imágenes, descripción, precio, colores disponibles, género, categoría,
 * disponibilidad en stock, calificación y garantía.
 *
 * @param {object} props - Las propiedades del componente.
 * @param {object} props.productData - Los datos del producto a mostrar.
 * @param {string} props.selectedImage - La URL de la imagen seleccionada.
 * @param {Function} props.setSelectedImage - La función para establecer la imagen seleccionada.
 * @returns {JSX.Element} El componente ProductInfo renderizado.
 *
 * Paquetes utilizados: Material-UI (Mui)
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 */
import { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { CustomButtons } from "../../../common/CustomButtons/CustomButtons";
import { calculateAverageRating } from "../../../../utils/calculateAverageRating";

export const ProductInfo = ({
  productData,
  selectedImage,
  setSelectedImage,
}) => {
  // Estado inicial de la imagen central
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Función para manejar el movimiento del mouse sobre la imagen
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width;
    const y = (e.pageY - top) / height;
    setPosition({ x, y });
  };

  

  return (
    <>
      <div className="lg:flex">
        {/* Imagenes  */}
        <div className="flex md:mt-4">
          {/* Imagenes pequeñas */}
          <div className="w-16">
            {productData.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product ${index}`}
                onClick={() => setSelectedImage(image)}
                className="cursor-pointer mb-2 "
              />
            ))}
          </div>
          {/* Imagen tamaño grande con zoom */}
          <div className="w-[270px] lg:w-[400px] lg:h-[480px] ml-4 relative overflow-hidden">
            <img
              src={selectedImage || productData.images[0]} // Mostrar la primera imagen por defecto
              alt="Product Full"
              className="transition-transform duration-500 transform "
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: `${position.x * 100}% ${position.y * 100}%`,
              }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setZoomLevel(1.5)} // Cambia el nivel de zoom al entrar
              onMouseLeave={() => setZoomLevel(1)}
            />
          </div>
        </div>

        {/* Descripcion */}
        <div className="mt-3 px-1 md:px-6 lg:px-12 text-black">
          {/* Titulo - marca - precio */}
          <h2 className="font-extrabold uppercase text-lg  ">
            {productData.title}
          </h2>
          <p className="mb-3">{productData.brand}</p>
          <p className="text-xl mb-3 font-medium">${productData.price}</p>

          {/* Colores */}
          <div className="flex">
            <p className="pr-5">Colores</p>
            {productData.colors.map((color, index) => (
              <span
                key={index}
                className="inline-block w-7 h-7 rounded-full mr-2 mb-4 border-[1px] border-grey cursor-pointer"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>

          {/* Tallas */}
          <div className="mb-5 flex">
            <p className="pr-5">Tallas</p>
            <ButtonGroup
              variant="outlined"
              aria-label="Basic button group"
              size="small"
              className="h-7"
            >
              {productData.sizes.map((size, index) => (
                <Button
                  key={index}
                  className="border-solid border-black text-black hover:border-black normal-case"
                >
                  {size}
                </Button>
              ))}
            </ButtonGroup>
          </div>

          {/* Genero - Categoria */}
          <div className="flex space-x-4 mb-6 md:mb-4">
            <div className="bg-[#F4F4F4] rounded w-36 flex p-2">
              <i className="bx bx-user text-2xl px-2 mt-1" />
              <div className="inline-block text-sm">
                <p className="text-grey">Género </p>
                <p className="capitalize">{productData.gender}</p>
              </div>
            </div>

            <div className="bg-[#F4F4F4] rounded w-36 flex p-2">
              <i className="bx bx-category text-2xl px-2 mt-1" />
              <div className="inline-block text-sm">
                <p className="text-grey">Categoría </p>
                <p className="capitalize">{productData.category}</p>
              </div>
            </div>
          </div>

          {/* Descripcion - Boton Compra */}
          <p className=" lg:w-96 lg:mb-5 mb-5 lg:text-base text-sm">
            {productData.description}
          </p>

          <div className="mb-6">
            <CustomButtons title="Añadir al carrito" variant="contained" />
          </div>

          <div className="flex space-x-6">
            <div className="flex space-x-2">
              <div className="bg-[#F4F4F4] rounded-lg p-2">
                <i className="bx bx-store" />
              </div>
              <div className="inline-block text-xs text-grey">
                <p>En stock</p>
                <p>{productData.inStock}</p>
              </div>
            </div>

            <div className="flex space-x-2">
              <div className="bg-[#F4F4F4] rounded-lg p-2">
                <i className="bx bx-star" />
              </div>
              <div className="inline-block text-xs text-grey">
                <p>Calificación</p>
                <p>{calculateAverageRating(productData.comments, productData.qualification)}</p>
              </div>
            </div>

            <div className="flex space-x-2">
              <div className="bg-[#F4F4F4] rounded-lg p-2">
                <i className="bx bx-check-shield" />
              </div>
              <div className="inline-block text-xs text-grey">
                <p>Garantia</p>
                <p>6 meses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
