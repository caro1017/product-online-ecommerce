/**
 * Calcula el promedio de calificación de un producto basado en los comentarios y la calificación del producto.
 * 
 * 
 * @param {Array} comments - La lista de comentarios del producto, cada uno con una calificación.
 * @param {number} productRating - La calificación del producto en sí misma.
 * @returns {string} - El promedio de calificación del producto redondeado a una décima.
 * 
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 29 de abril de 2024
 */
export const calculateAverageRating = (comments, productRating) => {
  // Verifica si no hay comentarios
  if (!comments || comments.length === 0) {
    return productRating; // Si no hay comentarios, retorna la calificación del producto
  }

  // Calcula la suma total de todas las calificaciones en los comentarios
  const totalRatings = comments.reduce(
    (accumulator, comment) => accumulator + comment.qualification,
    0
  );

  // Calcula el promedio dividiendo la suma total por el número de comentarios
  const averageRating = totalRatings / comments.length;

  // Redondea el promedio a una décima y lo convierte a cadena de texto
  return averageRating.toFixed(1);
};
