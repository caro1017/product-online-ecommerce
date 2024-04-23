/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const CustomButtons = ({
  title,
  icon,
  onClick,
  variant,
  type,
  disabled,
  link,
}) => {
  // Definir estilos de variantes para las clases de color CSS de Tailwind
  const variantToColor = {
    contained:
      "bg-yellow hover:bg-yellow text-white tracking-wider font-normal px-8 normal-case ",
    outlined:
      "border-solid border-black text-black font-normal tracking-wider px-8 hover:border-black normal-case ",
  };

  //Obtener la clase de color CSS Tailwind correspondiente según la variante
  const colorClass = variantToColor[variant] || "";

  return (
    <>
      <Link to={link}>
        <Button
          className={colorClass}
          endIcon={icon}
          onClick={onClick}
          variant={variant}
          type={type}
          disabled={disabled}
        >
          {title}
        </Button>
      </Link>
    </>
  );
};
