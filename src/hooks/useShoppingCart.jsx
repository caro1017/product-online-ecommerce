import { useState } from "react";

// Hook personalizado para el carrito de compra
export const useShoppingCart = () => {
  // Estado para almacenar los elementos del carrito
  const [cartItems, setCartItems] = useState([]);

  // Función para añadir un producto al carrito
  const addToCart = (product) => {
    const newCartItems = [...cartItems, product];
    setCartItems(newCartItems);
    console.log("Producto añadido al carrito:", product); // Mostrar en consola el producto añadido
    console.log("Carrito actualizado:", newCartItems); // Mostrar en consola el carrito actualizado
  };

  // Función para obtener los elementos del carrito
  const getCartItems = () => {
    return cartItems;
  };

  return {
    addToCart,
    getCartItems,
  };
};
