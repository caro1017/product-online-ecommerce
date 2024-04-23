/* eslint-disable react/prop-types */
import { useState } from "react";
import { Card, CardContent, CardMedia, IconButton } from "@mui/material";
import { CustomButtons } from "../CustomButtons/CustomButtons";

export const CardProduct = ({ images, title, price }) => {
  // Estado inicial
  const [liked, setLiked] = useState(false);
  //Cambiar de estado
  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  return (
    <>
      <Card className="md:max-w-60 max-w-44 bg-[#F6F6F6] relative">
        <div className="w-full h-44 flex justify-center items-center overflow-hidden  ">
          <CardMedia
            component="img"
            image={images}
            alt={title}
            className="transform transition-transform duration-300 hover:scale-110"
          />
          <IconButton
            onClick={handleLikeToggle}
            className="absolute top-2 right-2"
          >
            {liked ? (
              <i className="bx bxs-heart text-salmon" />
            ) : (
              <i className="bx bx-heart text-grey" />
            )}
          </IconButton>
        </div>
        <CardContent className="md:mt-2 h-[150px] text-center">
          <h4 className="text-sm">{title}</h4>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <p className="font-extrabold text-lg mb-1">$ {price}</p>
            <CustomButtons title="Comprar" variant="contained"/>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
