/* eslint-disable react/prop-types */
import { LinearProgress, Rating, Stack } from "@mui/material";
import { CardComment } from "../../../common/Card/CardComment";
import { CustomButtons } from "../../../common/CustomButtons/CustomButtons";
import { calculateAverageRating } from "../../../../utils/calculateAverageRating";

export const Comments = ({ productData }) => {
  // Verifica si productData está presente y tiene la propiedad qualification
  if (!productData || !productData.qualification) {
    return null; // Devuelve null si productData no está definido o no tiene qualification
  }

  const qualificationLevels = [
    { level: "Excelente", threshold: { min: 4.7, max: 5 }, percentage: 100 },
    { level: "Bueno", threshold: { min: 4, max: 4.6 }, percentage: 80 },
    { level: "Regular", threshold: { min: 2.5, max: 3.5 }, percentage: 40 },
    { level: "Malo", threshold: { min: 0, max: 2.49 }, percentage: 0 },
  ];

  const determineLevel = (qualification) => {
    for (const levelObj of qualificationLevels) {
      const { threshold } = levelObj;
      if (typeof threshold === "number") {
        // Si el umbral es un número, simplemente comprobamos si la calificación es mayor o igual al umbral
        if (qualification >= threshold) {
          return levelObj.level;
        }
      } else if (
        // Si el umbral es un objeto con min y max, verificamos si la calificación está dentro del rango
        qualification >= threshold.min &&
        qualification <= threshold.max
      ) {
        return levelObj.level;
      }
    }
    return "Desconocido"; // Si la calificación no está en ningún rango conocido
  };

  // Determinar el nivel de calificación del producto
  const qualificationLevel = determineLevel(productData.qualification);

  return (
    <>
      <div className="text-black mt-10 lg:mt-16">
        <h2 className="font-semibold px-4 md:px-16 lg:px-52 mb-4">Reseñas</h2>
        <div className="md:flex px-4 md:px-16 lg:px-52">
          <div className="bg-[#F4F4F4] w-40 rounded p-5 mb-5">
            <h2 className="text-4xl font-semibold text-center">
              {calculateAverageRating(
                productData.comments,
                productData.qualification
              )}
            </h2>
            <div className="flex justify-center">
              <Stack spacing={1}>
                <Rating
                  name="half-rating"
                  defaultValue={calculateAverageRating(
                    productData.comments,
                    productData.qualification
                  )}
                  precision={0.5}
                  size="small"
                  readOnly
                />
              </Stack>
            </div>
          </div>

          <div className="md:ml-5 text-sm flex-grow">
            {qualificationLevels.map((levelObj, index) => (
              <div key={index} className="flex items-center mt-1">
                <p className="mr-2">{levelObj.level}</p>
                {qualificationLevel === levelObj.level ? (
                  <LinearProgress
                    variant="determinate"
                    value={(productData.qualification / 5) * 100} // Escalar la calificación al rango de 0-100
                    className="w-full rounded-full"
                    style={{ backgroundColor: "#cccacaa7" }}
                    sx={{
                      "& .MuiLinearProgress-barColorPrimary": {
                        backgroundColor: "#E3A645",
                      },
                    }}
                  />
                ) : (
                  <LinearProgress
                    variant="determinate"
                    value={0} // Mostrar la línea de progreso vacía para niveles no coincidentes
                    className="w-full rounded-full"
                    style={{ backgroundColor: "#cccacaa7" }}
                  />
                )}
                <p className="text-xs ml-8">{levelObj.percentage}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 md:px-16 lg:px-52 mt-5">
        {productData.comments.map((comment, index) => (
          <CardComment
            key={index}
            avatar={comment.avatar}
            user={comment.user}
            qualification={comment.qualification}
            comment={comment.comment}
            date={comment.date}
          />
        ))}
      </div>

      <div className="px-3 md:px-16 lg:px-52 my-10">
        <CustomButtons title="Añadir comentario" variant="contained" />
      </div>
    </>
  );
};
