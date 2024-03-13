/* eslint-disable react/prop-types */
import { Button } from "@mui/material";

export const CustomButtons = ({
  title,
  icon,
  onClick,
  variant,
  type,
  disabled,
}) => {
  // Definir estilos de variantes para las clases de color CSS de Tailwind
  const variantToColor = {
    contained: "bg-yellow hover:bg-yellow text-white tracking-wider font-light px-8 ",
    outlined:
      "border-solid border-black text-black font-normal tracking-wider px-8 hover:border-black",
  };

  //Obtener la clase de color CSS Tailwind correspondiente según la variante
  const colorClass = variantToColor[variant] || "";

  return (
    <>
      <div className="px-5 py-3">
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
      </div>
    </>
  );
};
