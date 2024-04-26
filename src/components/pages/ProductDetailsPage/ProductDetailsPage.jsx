/**
 * La página `ProductDetailsPage` muestra los detalles de un producto específico,
 * incluyendo su información detallada y comentarios de los usuarios.
 *
 * @returns {JSX.Element} El componente ProductDetailsPage renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 */
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumbs, Link } from "@mui/material";
import { NavBar } from "../../layout/NavBar/NavBar";
import product from "../../../__mocks__/product.json";
import { ProductInfo } from "./Section/ProductInfo";
import { Comments } from "./Section/Comments";

export const ProductDetailsPage = () => {
  // Obtener el ID del producto de los parámetros de la URL
  const { productId } = useParams();

  // Estado para gestionar la imagen seleccionada del producto
  const [selectedImage, setSelectedImage] = useState(null);

  // Buscar el producto por ID en el JSON
  const productData = product.find((product) => product._id === productId);

  // Verificar si el producto existe
  if (!productData) {
    return (
      <>
        <div className="mt-14 md:mt-16 lg:mt-[6.2rem]">
          <p className="uppercase">Producto no encontrado.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className="mt-14 md:mt-16 lg:mt-[6.2rem]">
        <div className="flex px-5 md:px-8 lg:px-[320px] md:pt-5 text-black text-xs">
          {/* Pasos */}
          <Breadcrumbs
            separator={<i className="bx bx-chevron-right" />}
            aria-label="breadcrumb"
            className="my-4"
          >
            <Link
              color="inherit"
              href="/productPage"
              className="font-semibold"
              underline="none"
            >
              Productos
            </Link>
            <span className="text-grey font-light">{productData.title}</span>
          </Breadcrumbs>
        </div>

        <div className="flex justify-center px-20">
          <ProductInfo
            productData={productData}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        </div>

        <div className="py-8">
          <Comments />
        </div>
      </div>
    </>
  );
};
