export const calculateAverageRating = (comments, productRating) => {
  if (!comments || comments.length === 0) {
    return productRating; // Si no hay comentarios, retornar la calificación del producto
  }

  const totalRatings = comments.reduce(
    (accumulator, comment) => accumulator + comment.qualification,
    0
  );
  const averageRating = totalRatings / comments.length;
  return averageRating.toFixed(1);
};
