/* eslint-disable react/prop-types */
import { useState } from "react";
import { CustomButtons } from "../../../common/CustomButtons/CustomButtons";

export const ProductInfo = ({
  productData,
  selectedImage,
  setSelectedImage,
}) => {
  /* Estado inicial de la imagen central */
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  /* Funcion para poder recorrer la imagen */
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width;
    const y = (e.pageY - top) / height;
    setPosition({ x, y });
  };
  return (
    <>
      <div className="md:flex">
        {/* Imagenes  */}
        <div className="flex md:mt-4">
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
        <div className="lg:mt-10 py-5 px-1 md:px-6 lg:px-12 text-black">
          {/* Titulo - marca - precio */}
          <h2 className="font-extrabold uppercase text-lg  ">
            {productData.title}
          </h2>
          <p className="mb-3">{productData.brand}</p>
          <p className="text-lg mb-3">${productData.price}</p>
          {/* Colores */}
          {productData.colors.map((color, index) => (
            <span
              key={index}
              className="inline-block w-7 h-7 rounded-full mr-2 mb-4 border-[1px] border-grey"
              style={{ backgroundColor: color }}
            ></span>
          ))}

          <div className="flex space-x-4 mb-5">
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

          <p className="w-60 lg:mb-8 mb-5 lg:text-base text-sm">
            {productData.description}
          </p>
          <div className="mb-8">
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
                <p>{productData.qualification}</p>
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