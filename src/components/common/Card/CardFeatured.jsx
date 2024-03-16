import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CustomButtons } from "../CustomButtons/CustomButtons";
export const CardFeatured = () => {
  return (
    <>
      <Card className="relative lg:w-[500px]">
        <div className="w-full h-80 flex justify-center items-center overflow-hidden  ">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1702289613007-8b830e2520b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="green iguana"
              className="transform transition-transform duration-300 hover:scale-110"
            />
          </CardActionArea>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <div className="p-5">
          <CustomButtons title="Comprar" variant="outlined" />
        </div>
      </Card>
    </>
  );
};
