/* eslint-disable react/prop-types */
import { Avatar, Card, CardContent, Rating, Stack } from "@mui/material";

export const CardComment = ({
  avatar,
  user,
  comment,
  qualification,
  date,
}) => {
  return (
    <>
      <Card className="my-3">
        <CardContent className="bg-[#f4f4f489] flex relative text-black md:py-5">
          <Avatar alt={user} src={avatar}/>

          <div className="ml-5">
            <h3 className="font-semibold">{user}</h3>
            <Stack spacing={1}>
              <Rating
                name="half-rating"
                defaultValue={qualification}
                precision={0.5}
                size="small"
                readOnly
              />
            </Stack>
            <p className="mt-2 text-grey text-xs lg:text-sm">{comment}</p>
          </div>

          <div className="absolute top-0 right-0 mt-4 mr-4">
            <p className="text-xs text-grey">{date}</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
