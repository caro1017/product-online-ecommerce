/**
 * Componente ShoppingCartPage
 *
 * Este componente representa la página del carrito de compras de una aplicación de comercio electrónico.
 * Incluye una barra de navegación, una sección del carrito de compras, una sección de resumen de pedido,
 * y una barra de pie de página. El diseño es responsive, ajustando márgenes y rellenos
 * según diferentes tamaños de pantalla.
 *
 * @returns {JSX.Element} El componente ShoppingCartPage renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 21 de mayo de 2024
 */

// Importar componentes necesarios desde diferentes directorios
import { CardShopping } from "../../common/Card/CardShopping";
import { NavBar } from "../../layout/NavBar/NavBar";
import { OrderSummary } from "./Section/OrderSummary";
import { FooterBar } from "../../layout/FooterBar/FooterBar";

export const ShoppingCartPage = () => {
  return (
    <>
      <NavBar />

      {/* Sección principal del contenido de la página del carrito de compras */}
      <div className="mt-20 lg:mt-36 mb-10 text-black">
        <h2 className="font-semibold px-4 md:px-16 lg:px-52 mb-8 ">
          Carrito de compra
        </h2>
        <div className="lg:flex px-4 md:px-16 lg:px-52 space-x-4">
          {/* Artículos del carrito de compras */}
          <div>
            <CardShopping />
          </div>
          {/* Resumen del pedido */}
          <div>
            <OrderSummary />
          </div>
        </div>
      </div>

      <FooterBar />
    </>
  );
};
