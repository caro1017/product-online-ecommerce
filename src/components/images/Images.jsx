// eslint-disable-next-line react/prop-types
export const Images = ({ imageName, className }) => {
  const imagePath = `../../../public/${imageName}`;

  return (
    <>
      <img className={className} src={imagePath} alt={imageName} />
    </>
  );
};
