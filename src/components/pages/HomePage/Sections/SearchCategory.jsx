/**
 * Componente SearchCategory renderiza una sección de búsqueda por categorías.
 * Muestra una lista de categorías disponibles para búsqueda.
 *
 * @returns {React.ReactNode} El componente SearchCategory renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 */
import { CardCategory } from "../../../common/Card/CardCategory";

// Datos de las categorías disponibles para búsqueda
const categoriesItems = [
  { title: "Moda", icon: <i className="bx bx-closet" /> },
  { title: "Tecnologia", icon: <i className="bx bx-laptop" /> },
  { title: "Hogar", icon: <i className="bx bx-home-smile" /> },
  { title: "Salud", icon: <i className="bx bx-spa" /> },
];

export const SearchCategory = () => {
  return (
    <>
      <div className="w-full h-full py-2 bg-[#FAFAFA]">
        {/* Título de la sección */}
        <h2 className="text-center text-2xl py-8">Categorías</h2>
        <div className="flex flex-wrap justify-center pb-8">
          {/* Renderizar las categorías */}
          {categoriesItems.map((categoriesItems, index) => (
            <div key={index} className="py-2 px-0 md:px-1">
              <CardCategory
                icon={categoriesItems.icon}
                title={categoriesItems.title}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
