/**
 * Componente CardShopping
 *
 * Este componente representa un elemento de producto en el carrito de compras.
 * Muestra la información del producto, incluyendo imagen, nombre, talla, color, cantidad, precio y opción para eliminar.
 * Permite al usuario ajustar la cantidad del producto y eliminarlo del carrito.
 *
 * @returns {JSX.Element} El componente CardShopping renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 21 de mayo de 2024
 */

/* eslint-disable react/prop-types */
import { useState } from "react";
import { IconButton } from "@mui/material";

export const CardShopping = () => {
  // Estado para almacenar el valor del contador
  const [count, setCount] = useState(1);

  // Funciones para incrementar y decrementar el contador de cantidad de producto
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      // Para evitar que el contador sea menor que 1
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <>
      <div className="md:flex">
        {/* Informacion producto */}
        <div className="flex space-x-4">
          <div>
            <img
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9f684ace-3163-4227-8f85-2d2a067dd4f5/air-max-90-gore-tex-zapatillas-fQjC4b.png"
              alt="Zapatillas deportivas Air Max"
              className="w-40"
            />
          </div>

          <div className="mx-1 w-full mt-3 md:mt-5 ">
            <p className="font-bold">Zapatillas deportivas Air Max</p>

            <div className="mt-3 text-sm">
              <div className="flex space-x-3">
                <p className="text-grey">Talla </p>
                <p className="capitalize">35</p>
              </div>
              <div className="flex space-x-3">
                <p className="text-grey">Color </p>
                <p className="capitalize">Blanco</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cantidad - precio - eliminar */}
        <div className="-mt-8 md:mt-[90px] md:ml-0">
          <div className="flex justify-end md:space-x-1">
            {/* Contador */}
            <IconButton onClick={decrementCount} size="small">
              <i className="bx bx-minus" />
            </IconButton>
            <div className=" rounded border border-solid border-grey text-black w-10 h-8 text-center mt-1 lg:mt-0">
              {count}
            </div>
            <IconButton onClick={incrementCount} size="small">
              <i className="bx bx-plus" />
            </IconButton>

            {/* Precio */}
            <p className="font-bold md:px-5 px-3 mt-1 lg:mt-0">$129.99</p>

            {/* Boton Eliminar */}
            <IconButton size="small">
              <i className="bx bx-trash" />
            </IconButton>
          </div>
        </div>
      </div>

      <hr className="my-6 border-grey/[.20] border-[1.5px] border-solid rounded-full" />
    </>
  );
};
