/* eslint-disable react/prop-types */
import { useState } from "react";
import { IconButton } from "@mui/material";

export const CardShopping = ({
  onDelete,
  urlImg,
  title,
  size,
  color,
  price,
}) => {
  // Estado para almacenar el valor del contador
  const [count, setCount] = useState(1);

  // Funciones para incrementar y decrementar el contador
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      // Para evitar que el contador sea menor que 1
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <>
      <div className="md:flex">
        {/* Informacion producto */}
        <div className="flex space-x-4">
          <div>
            <img src={urlImg} alt={title} className="w-40" />
          </div>

          <div className="mx-1 w-full mt-3 md:mt-5 ">
            <p className="font-bold">{title}</p>

            <div className="mt-3 text-sm">
              <div className="flex space-x-3">
                <p className="text-grey">Talla </p>
                <p className="capitalize">{size}</p>
              </div>
              <div className="flex space-x-3">
                <p className="text-grey">Color </p>
                <p className="capitalize">{color}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cantidad - precio - eliminar */}
        <div className="-mt-10 md:mt-14 md:ml-0">
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
            <p className="font-bold md:px-5 px-3 mt-1 lg:mt-0">$ {price}</p>

            {/* Boton Eliminar */}
            <IconButton size="small" onClick={handleDelete}>
              <i className="bx bx-trash" />
            </IconButton>
          </div>
        </div>
      </div>

      <hr className="my-6 border-grey border-[1.5px] border-solid rounded-full opacity-20" />
    </>
  );
};
