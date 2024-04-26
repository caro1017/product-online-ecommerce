/* eslint-disable react/prop-types */
/**
 * Componente CustomButtons renderiza un botón personalizado que puede tener diferentes variantes y acciones.
 *
 * @param {Object} props - Los props del componente.
 * @param {string} props.title - El texto del botón.
 * @param {React.ReactNode} props.icon - El ícono del botón.
 * @param {function} props.onClick - La función a ejecutar cuando se hace clic en el botón.
 * @param {string} props.variant - La variante del botón (contenida u omitida).
 * @param {string} props.type - El tipo del botón (por ejemplo, "submit" o "button").
 * @param {boolean} props.disabled - Indica si el botón está deshabilitado.
 * @param {string} props.link - La ruta a la que enlaza el botón.
 * @returns {React.ReactNode} El componente CustomButtons renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 * Paquetes utilizados: Material-UI (Mui) Button, React Router DOM
 */
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

  // Obtener la clase de color CSS Tailwind correspondiente según la variante
  const colorClass = variantToColor[variant] || "";

  return (
    <>
      {/* Enlace con botón */}
      <Link to={link}>
        {/* Botón Material-UI */}
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
