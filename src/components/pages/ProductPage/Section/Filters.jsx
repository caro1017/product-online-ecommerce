import { useState } from "react";
import { CustomSelect } from "../../../common/CustomSelect/CustomSelect";
import { CardProduct } from "../../../common/Card/CardProduct";
import product from "../../../../__mocks__/product.json";

export const Filters = () => {
  // Estados locales para los filtros de precio, marca y categoria
  const [selectedPriceFilter, setSelectedPriceFilter] = useState(null);
  const [selectedBrandFilter, setSelectedBrandFilter] = useState(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState(null);

  // Obtener marcas únicas del JSON de productos
  const uniqueBrands = [...new Set(product.map((item) => item.brand))];
  const uniqueCategory = [...new Set(product.map((item) => item.category))];

  // Función para manejar el cambio de filtro de precio
  const handlePriceFilterChange = (value) => {
    setSelectedPriceFilter(value);
  };

  // Función para manejar el cambio de filtro de marca
  const handleBrandFilterChange = (value) => {
    setSelectedBrandFilter(value);
  };

  // Función para manejar el cambio de filtro de categoria
  const handleQualificationFilterChange = (value) => {
    setSelectedCategoryFilter(value);
  };

  // Función para filtrar los productos según los filtros seleccionados
  const filterProducts = () => {
    let filteredProducts = [...product];

    // Aplicar filtro por precio
    if (selectedPriceFilter === 20) {
      filteredProducts = filteredProducts
        .slice()
        .sort((a, b) => a.price - b.price);
    } else if (selectedPriceFilter === 30) {
      filteredProducts = filteredProducts
        .slice()
        .sort((a, b) => b.price - a.price);
    }

    // Aplicar filtro por marca
    if (selectedBrandFilter !== null) {
      filteredProducts = filteredProducts.filter(
        (item) => item.brand === selectedBrandFilter
      );
    }

    // Aplicar filtro por categoria
    if (selectedCategoryFilter !== null) {
      filteredProducts = filteredProducts.filter(
        (item) => item.category === selectedCategoryFilter
      );
    }

    return filteredProducts;
  };

  // Función para renderizar los productos filtrados
  const renderFilteredProducts = () => {
    const filteredProducts = filterProducts();

    // Verificar si no hay productos filtrados
    if (filteredProducts.length === 0) {
      return (
        <>
          <h2 className="text-salmon mt-28 text-center font-semibold tracking-wide">
            ARTICULO NO ENCONTRADO
          </h2>
        </>
      );
    }

    return filteredProducts.map((product) => (
      <CardProduct
        key={product._id}
        id={product._id}
        images={
          product.images && product.images.length > 0 ? product.images[0] : null
        }
        title={product.title}
        price={product.price}
      />
    ));
  };

  // Listado de los items que tendra el selector
  const menuItemsPrice = [
    { value: 10, label: "Defecto" },
    { value: 20, label: "Menor precio" },
    { value: 30, label: "Mayor precio" },
  ];

  // Definición de las opciones del menú de filtro de marca
  const menuItemsBrand = [
    { value: null, label: "Marca" },
    ...uniqueBrands
      .filter((brand) =>
        selectedCategoryFilter
          ? product.some(
              (item) =>
                item.brand === brand && item.category === selectedCategoryFilter
            )
          : true
      )
      .map((brand, index) => ({
        key: index,
        value: brand,
        label: brand,
      })),
  ];

  // Definición de las opciones del menú de filtro de categoria
  const menuItemsQualification = [
    { value: null, label: "Categoria" },
    ...uniqueCategory.map((qualification, index) => ({
      key: index,
      value: qualification,
      label: qualification.toString(),
    })),
  ];

  return (
    <>
      {/* Selector de filtro de precio */}
      <div className="lg:m-10 lg:flex lg:justify-end lg:px-28 ml-2 mb-8">
        <p className="text-grey mt-8 px-2 font-semibold"> Ordenar por </p>
        <CustomSelect
          initialValue="Seleccionar"
          menuItems={menuItemsPrice}
          onChange={handlePriceFilterChange}
        />
      </div>

      {/* Selectores de filtro de marca y categoria */}
      <div className="lg:flex justify-center mb-16">
        <div className="p-3">
          <h2 className="text-grey ml-2 md:pb-4 font-semibold"> Filtrar por</h2>
          <div className="lg:flex-col flex">
            <CustomSelect
              initialValue="Categoria"
              menuItems={menuItemsQualification}
              onChange={handleQualificationFilterChange}
            />
            <CustomSelect
              initialValue="Marca"
              menuItems={menuItemsBrand}
              onChange={handleBrandFilterChange}
            />
          </div>
        </div>

        {/* Div para mostrar los productos filtrados */}
        <div className="md:mx-4 mx-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {renderFilteredProducts()}
        </div>
      </div>
    </>
  );
};
