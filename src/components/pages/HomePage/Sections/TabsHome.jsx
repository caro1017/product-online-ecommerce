/**
 * Componente TabsHome renderiza pestañas con diferentes tipos de productos.
 * Incluye pestañas para nuevos productos, productos mejor vendidos y productos destacados.
 *
 * @returns {React.ReactNode} El componente TabsHome renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 */
import { CardProduct } from "../../../common/Card/CardProduct";
import { CustomTabs } from "../../../common/CustomTabs/CustomTabs";
import product from "../../../../__mocks__/product.json";

export const TabsHome = () => {
  // Filtrar productos con calificación de 4.6 o superior
  const filteredProductsbestseller = product
    .filter((item) => item.qualification >= 4.7)
    .slice(0, 12); // Limitar a 12 productos

  // Filtrar productos con calificación de 4.8 o superior
  const filteredProductsfeatured = product
    .filter((item) => item.qualification >= 4.9)
    .slice(0, 12); // Limitar a 12 productos

  // Define la estructura de las pestañas
  const tabs = [
    {
      title: "Nuevos Productos",
      content: (
        <div className="mt-10 md:mx-4 mx-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {product.slice(0, 12).map((item) => (
            <CardProduct
              key={item._id}
              id={item._id}
              images={
                item.images && item.images.length > 0 ? item.images[0] : null
              }
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Mejor vendido",
      content: (
        <div className="mt-10 md:mx-4 mx-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {filteredProductsbestseller.map((item) => (
            <CardProduct
              key={item._id}
              id={item._id}
              images={
                item.images && item.images.length > 0 ? item.images[0] : null
              }
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Productos Destacados",
      content: (
        <div className="mt-10 md:mx-4 mx-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {filteredProductsfeatured.map((item) => (
            <CardProduct
              key={item._id}
              id={item._id}
              images={
                item.images && item.images.length > 0 ? item.images[0] : null
              }
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="w-full flex justify-center py-10">
      <CustomTabs tabs={tabs} />
    </div>
  );
};
