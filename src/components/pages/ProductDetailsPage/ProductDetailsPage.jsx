/**
 * La página `ProductDetailsPage` muestra los detalles de un producto específico,
 * incluyendo su información detallada y comentarios de los usuarios.
 *
 * @returns {JSX.Element} El componente ProductDetailsPage renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumbs, Link } from "@mui/material";
import { NavBar } from "../../layout/NavBar/NavBar";
import product from "../../../__mocks__/product.json";
import { ProductInfo } from "./Section/ProductInfo";
import { Comments } from "./Section/Comments";
import { CardProduct } from "../../../components/common/Card/CardProduct";
import { FooterBar } from "../../layout/FooterBar/FooterBar";

export const ProductDetailsPage = () => {
  // Obtener el ID del producto de los parámetros de la URL
  const { productId } = useParams();

  // Estado para gestionar la imagen seleccionada del producto
  const [selectedImage, setSelectedImage] = useState(null);

  // Buscar el producto por ID en el JSON
  const productData = product.find((product) => product._id === productId);

  // Función para desplazar la página al inicio
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Desplazamiento suave
    });
  };

  useEffect(() => {
    // Al montar el componente, se desplaza al inicio de la página
    scrollToTop();
  }, []); // El array vacío como segundo argumento asegura que este efecto se ejecute solo una vez al montar el componente

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

  // Filtrar productos relacionados
  const relatedProducts = product
    .filter(
      (product) =>
        product.category === productData.category && product._id !== productId
    )
    .sort(() => Math.random() - 0.5) // Mezclar aleatoriamente los productos relacionados
    .slice(0, 4); // Limitar a 4 productos relacionados

  return (
    <>
      <NavBar />
      <div className="mt-14 md:mt-16 lg:mt-[6.2rem]">
        <div className="flex px-5 md:px-8 lg:px-[260px] md:pt-5 text-black text-xs">
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

        {/* Informacion del producto actual */}
        <div className="flex justify-center px-20">
          <ProductInfo
            productData={productData}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        </div>

        {/* Comentarios del producto */}
        <div>
          <Comments productData={productData} />
        </div>

        {/* Listado de productos relacionados segun su categoria */}
        <div className="py-10">
          <h2 className="text-black font-semibold px-4 md:px-16 lg:px-52 mb-10">
            Productos Relacionados
          </h2>
          <div className="lg:mx-60 md:mx-4 mx-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((relatedProduct) => (
              <CardProduct
                key={relatedProduct._id}
                id={relatedProduct._id}
                images={relatedProduct.images}
                title={relatedProduct.title}
                price={relatedProduct.price}
                onClick={scrollToTop}
              />
            ))}
          </div>
        </div>
      </div>
      <FooterBar />
    </>
  );
};
