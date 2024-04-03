import { CardProduct } from "../../../common/Card/CardProduct";
import { CustomTabs } from "../../../common/CustomTabs/CustomTabs";
import product from "../../../../__mocks__/product.json";

export const TabsHome = () => {
  // Filtrar productos con calificación de 4.6 o superior
  const filteredProductsbestseller = product.filter(
    (item) => item.qualification >= 4.7
  );
  // Filtrar productos con calificación de 4.8 o superior
  const filteredProductsfeatured = product.filter(
    (item) => item.qualification >= 4.9
  );

  // Define la estructura de las pestañas
  const tabs = [
    {
      title: "Nuevos Productos",
      content: (
        <div className="md:mx-4 mx-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {product.map((item) => (
            <CardProduct
              key={item._id}
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
        <div className="md:mx-4 mx-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {filteredProductsbestseller.map((item) => (
            <CardProduct
              key={item._id}
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
        <div className="md:mx-4 mx-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {filteredProductsfeatured.map((item) => (
            <CardProduct
              key={item._id}
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
    <>
      <CustomTabs tabs={tabs} />
    </>
  );
};
