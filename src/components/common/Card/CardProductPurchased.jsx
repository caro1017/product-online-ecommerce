/* eslint-disable react/prop-types */
import { Card } from "@mui/material";

export const CardProductPurchased = ({ products }) => {
  return (
    <>
      {/* Mapeo de productos para generar las tarjetas */}
      {products.map((product) => (
        <Card
          key={product.id}
          className="text-black bg-[#F4F4F4] p-3 flex justify-between items-center mb-4"
        >
          <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="mb-1 ">
              {product.name}
              <span className="text-xs text-grey ml-3 italic">
                {product.brand}
              </span>
            </p>
            <div className="flex items-center">
              <div
                className="w-4 h-4 rounded-full mr-2 shadow shadow-black/[.50] "
                style={{ backgroundColor: product.colors }}
              ></div>
              <p className="text-xs text-grey">Talla - {product.size}</p>
            </div>
          </div>
          <p className="ml-4">${product.price}</p>
        </Card>
      ))}
    </>
  );
};
