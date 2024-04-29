/* eslint-disable react/prop-types */
/**
 * Componente CardFeatured renderiza una tarjeta destacada con imagen, nombre, descripción y botón de compra.
 *
 * @param {Object} props - Los props del componente.
 * @param {string} props.name - El nombre del producto.
 * @param {string} props.description - La descripción del producto.
 * @param {string} props.image - La URL de la imagen del producto.
 * @returns {React.ReactNode} El componente CardFeatured renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 */
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CustomButtons } from "../CustomButtons/CustomButtons";

export const CardFeatured = ({ name, description, image, link }) => {
  return (
    <>
      {/* Tarjeta con imagen */}
      <Card className="relative mx-3 md:w-[375px] lg:w-[500px] ">
        <div className="w-full h-80 flex justify-center items-center overflow-hidden  ">
          <CardActionArea>
            {/* Imagen del producto */}
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt={name}
              className="transform transition-transform duration-300 hover:scale-110 h-96"
            />
          </CardActionArea>
        </div>
        {/* Contenido de la tarjeta */}
        <CardContent className="h-20">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          {/* Descripción del producto */}
          <Typography
            variant="body2"
            color="text.secondary"
            className="truncate"
          >
            {description}
          </Typography>
        </CardContent>
        {/* Botón de compra */}
        <div className="p-5">
          <CustomButtons title="Comprar" variant="outlined" link={link} />
        </div>
      </Card>
    </>
  );
};
