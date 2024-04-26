/**
 * Componente Router
 * Configura las rutas para la navegación en la aplicación.
 * Utiliza BrowserRouter de react-router-dom para proporcionar la funcionalidad de enrutamiento.
 * Define las rutas para las diferentes páginas de la aplicación.
 *
 *
 * @returns {JSX.Element} Elemento JSX que contiene el enrutador y las rutas.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 */
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "../components/pages/HomePage/HomePage";
import { RegisteredPage } from "../components/pages/RegisteredPage/RegisteredPage";
import { ProductPage } from "../components/pages/ProductPage/ProductPage";
import { ProductDetailsPage } from "../components/pages/ProductDetailsPage/ProductDetailsPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path="/" element={<HomePage />} />
        {/* Ruta para la página de registro */}
        <Route path="/registeredPage" element={<RegisteredPage />} />
        {/* Ruta para la página de productos */}
        <Route path="/productPage" element={<ProductPage />} />
        {/* Ruta para la página de detalles del producto */}
        <Route
          path="/productDetailsPage/:productId"
          element={<ProductDetailsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
