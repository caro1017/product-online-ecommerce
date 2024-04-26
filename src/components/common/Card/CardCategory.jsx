/* eslint-disable react/prop-types */
/**
 * El componente CardCategory renderiza una tarjeta con un ícono y un título.
 *
 * @param {Object} props - Los props del componente.
 * @param {React.ReactNode} props.icon - El elemento del ícono a mostrar.
 * @param {string} props.title - El texto del título a mostrar.
 * @returns {React.ReactNode} El componente CardCategory renderizado.
 * 
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 */

import { Card, CardActionArea, CardContent } from "@mui/material";

export const CardCategory = ({ icon, title }) => {
  return (
    <>
      <Card className="bg-[#EDEDED] w-40 text-center mx-2 text-black hover:text-yellow">
        <CardActionArea>
          <CardContent>
            {/* Renderizado del ícono */}
            <div className="text-3xl">{icon}</div>
            {/* Renderizado del título */}
            <h3> {title} </h3>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
