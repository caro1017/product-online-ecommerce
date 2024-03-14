/* eslint-disable react/prop-types */
import { Card, CardActionArea, CardContent } from "@mui/material";

export const CardCategory = ({ icon, title }) => {
  return (
    <>
      <Card className="bg-[#EDEDED] w-40 text-center mx-2 text-black hover:text-yellow">
        <CardActionArea>
          <CardContent>
            <div className="text-3xl">{icon}</div>
            <h3> {title} </h3>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
