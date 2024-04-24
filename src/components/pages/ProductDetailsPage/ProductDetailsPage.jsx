import { useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../../layout/NavBar/NavBar";
import product from "../../../__mocks__/product.json";
import { ProductInfo } from "./Section/ProductInfo";

export const ProductDetailsPage = () => {
  const { productId } = useParams();
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
        <div className="flex justify-center pt-5 px-20">
          <ProductInfo
            productData={productData}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        </div>
      </div>
    </>
  );
};
