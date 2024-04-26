/* eslint-disable react/prop-types */
/**
 * Componente CardProduct renderiza una tarjeta de producto con imagen, título, precio y botón de compra.
 *
 * @param {Object} props - Los props del componente.
 * @param {string} props.id - El ID del producto.
 * @param {string} props.images - La URL de la imagen del producto.
 * @param {string} props.title - El título del producto.
 * @param {number} props.price - El precio del producto.
 * @returns {React.ReactNode} El componente CardProduct renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 */
import { useState } from "react";
import { Card, CardContent, CardMedia, IconButton } from "@mui/material";
import { CustomButtons } from "../CustomButtons/CustomButtons";

export const CardProduct = ({ id, images, title, price }) => {
  // Estado inicial para el botón de "Me gusta"
  const [liked, setLiked] = useState(false);

  // Función para alternar el estado de "Me gusta"
  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  return (
    <>
      {/* Tarjeta de producto */}
      <Card className="md:max-w-60 max-w-44 bg-[#F6F6F6] relative">
        {/* Contenedor de la imagen y el botón "Me gusta" */}
        <div className="w-full h-44 flex justify-center items-center overflow-hidden  ">
          {/* Imagen del producto */}
          <CardMedia
            component="img"
            image={images}
            alt={title}
            className="transform transition-transform duration-300 hover:scale-110"
          />
          {/* Botón "Me gusta" */}
          <IconButton
            onClick={handleLikeToggle}
            className="absolute top-2 right-2"
          >
            {/* Icono de corazón lleno o vacío dependiendo del estado de "Me gusta" */}
            {liked ? (
              <i className="bx bxs-heart text-salmon" />
            ) : (
              <i className="bx bx-heart text-grey" />
            )}
          </IconButton>
        </div>

        {/* Contenido de la tarjeta */}
        <CardContent className="md:mt-2 h-[150px] text-center">
          {/* Título del producto */}
          <h4 className="text-sm">{title}</h4>

          {/* Precio del producto y botón de compra */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <p className="font-extrabold text-lg mb-1">$ {price}</p>
            {/* Botón de compra */}
            <CustomButtons
              title="Comprar"
              variant="contained"
              link={`/productDetailsPage/${id}`}
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
};
