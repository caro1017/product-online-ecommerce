/* eslint-disable react/prop-types */
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CustomButtons } from "../CustomButtons/CustomButtons";

export const CardFeatured = ({ name, description, image }) => {
  return (
    <>
      <Card className="relative mx-3 md:w-[375px] lg:w-[500px] ">
        <div className="w-full h-80 flex justify-center items-center overflow-hidden  ">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt={name}
              className="transform transition-transform duration-300 hover:scale-110 h-96"
            />
          </CardActionArea>
        </div>
        <CardContent className="h-20">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="truncate"
          >
            {description}
          </Typography>
        </CardContent>
        <div className="p-5">
          <CustomButtons title="Comprar" variant="outlined" />
        </div>
      </Card>
    </>
  );
};
