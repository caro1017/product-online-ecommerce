/* eslint-disable react/prop-types */
/**
 * Componente para mostrar los comentarios y calificaciones de un producto.
 *
 *
 * @param {Object} productData - Los datos del producto que incluyen comentarios y calificación.
 * @returns {JSX.Element|null} - El JSX que muestra los comentarios y calificaciones del producto, o null si no hay datos suficientes.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 29 de abril de 2024
 */
import { useState } from "react";
import { Alert, Card, LinearProgress, Rating, Stack } from "@mui/material";
import { CardComment } from "../../../common/Card/CardComment";
import { CustomButtons } from "../../../common/CustomButtons/CustomButtons";
import { calculateAverageRating } from "../../../../utils/calculateAverageRating";
import { CustomModal } from "../../../common/CustomModal/CustomModal";

export const Comments = ({ productData }) => {
  // Estado para controlar si el modal está abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Estado para controlar el comentario y la calificación
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState("");

  // Estado para controlar la validación de los campos
  const [error, setError] = useState(false);

  // Funciones para abrir y cerrar el modal
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setError(false); // Resetea el estado de error al cerrar el modal
  };

  // Función para enviar el nuevo comentario
  const handleSubmitComment = () => {
    if (newComment === "" || newRating === 0) {
      setError(true); // Si hay campos vacíos, mostrar error
    } else {
      console.log("Comentario:", newComment);
      console.log("Calificación:", newRating);
      // Lógica para guardar el comentario (ej: enviar a un API)
      setError(false); // Resetea el error en caso de éxito
      handleCloseModal(); // Cerrar el modal después de enviar
    }
  };

  // Verifica si productData está presente y tiene la propiedad qualification
  if (!productData || !productData.qualification) {
    return null; // Devuelve null si productData no está definido o no tiene qualification
  }

  /**
   * Determina el nivel de calificación basado en la calificación dada.
   * @param {number} qualification - La calificación del producto.
   * @returns {string} - El nivel de calificación correspondiente.
   */
  const qualificationLevels = [
    { level: "Excelente", threshold: { min: 4.7, max: 5 }, percentage: 100 },
    { level: "Bueno", threshold: { min: 4, max: 4.6 }, percentage: 80 },
    { level: "Regular", threshold: { min: 2.5, max: 3.5 }, percentage: 40 },
    { level: "Malo", threshold: { min: 1, max: 2.49 }, percentage: 0 },
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
      {/* Encabezado de la sección de comentarios */}
      <div className="mt-10 text-black lg:mt-14">
        <h2 className="px-4 mb-4 font-semibold md:px-16 lg:px-52">Reseñas</h2>
        <div className="px-4 md:flex md:px-16 lg:px-52">
          {/* Visualización de la calificación promedio */}
          <Card className="bg-[#F4F4F4] w-40 rounded p-5 mb-5">
            <h2 className="text-4xl font-semibold text-center">
              {/* Llama a la función para calcular la calificación promedio */}
              {calculateAverageRating(
                productData.comments,
                productData.qualification
              )}
            </h2>
            <div className="flex justify-center">
              {/* Visualización de la calificación en forma de estrellas */}
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
          </Card>

          {/* Visualización de los niveles de calificación */}
          <div className="flex-grow text-sm md:ml-5">
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
                {/* Muestra el nombre del nivel */}
                <p className="ml-8 text-xs">{levelObj.percentage}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Renderiza los comentarios */}
      <div className="px-3 mt-5 md:px-16 lg:px-52">
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

      {/* Botón para agregar un comentario */}
      <div className="px-3 my-10 md:px-16 lg:px-52">
        <CustomButtons
          title="Añadir comentario"
          variant="contained"
          onClick={handleOpenModal}
        />
      </div>

      {/* Modal para añadir comentario */}
      <CustomModal
        open={isModalOpen}
        onClose={handleCloseModal}
        title="Añadir un comentario"
        onSubmit={handleSubmitComment}
        submitLabel="Enviar"
        cancelLabel="Cancelar"
      >
        {/* Contenido del modal: Textarea para el comentario y campo de calificación */}
        <div>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Escribe tu comentario aquí..."
            rows={4}
            className="w-full p-2 border rounded"
          />
          <div className="mt-4">
            <label>Calificación:</label>
            <input
              type="number"
              value={newRating === 0 ? "" : newRating} // Si el valor es 0, el input estará vacío
              onChange={(e) => {
                const value = Number(e.target.value);
                if (value >= 1 && value <= 5) {
                  setNewRating(value); // Solo permite calificaciones entre 1 y 5
                } else if (e.target.value === "") {
                  setNewRating(""); // Permite que el campo quede vacío si el usuario borra el contenido
                }
              }}
              placeholder="Ingresa una calificación de 1 a 5"
              max={5}
              min={1}
              step={0.5}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        {error && (
          <Alert severity="error" className="mt-4">
            Todos los campos deben estar completos.
          </Alert>
        )}
      </CustomModal>
    </>
  );
};
