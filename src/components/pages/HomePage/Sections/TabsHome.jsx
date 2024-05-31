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
  // Función para filtrar y limitar productos
  const filterAndLimitProducts = (minQualification, limit) => {
    return product
      .filter((item) => item.qualification >= minQualification)
      .slice(0, limit);
  };

  // Productos filtrados y limitados
  const filteredProductsbestseller = filterAndLimitProducts(4.7, 12);
  const filteredProductsfeatured = filterAndLimitProducts(4.9, 12);
  const newProducts = product.slice(0, 12);

  // Función para generar el contenido de una pestaña
  const renderTabContent = (products) => (
    <div className="mt-10 mx-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
      {products.map(({ _id, images, title, price }) => (
        <CardProduct
          key={_id}
          id={_id}
          images={images && images.length > 0 ? images[0] : null}
          title={title}
          price={price}
        />
      ))}
    </div>
  );

  // Estructura de las pestañas
  const tabs = [
    {
      title: "Nuevos Productos",
      content: renderTabContent(newProducts),
    },
    {
      title: "Mejor vendido",
      content: renderTabContent(filteredProductsbestseller),
    },
    {
      title: "Productos Destacados",
      content: renderTabContent(filteredProductsfeatured),
    },
  ];

  return (
    <div className="w-full flex justify-center py-10">
      <CustomTabs tabs={tabs} />
    </div>
  );
};
