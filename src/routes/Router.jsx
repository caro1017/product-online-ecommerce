import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "../components/pages/HomePage/HomePage";
import { RegisteredPage } from "../components/pages/RegisteredPage/RegisteredPage";
import { ProductPage } from "../components/pages/ProductPage/ProductPage";
import { ProductDetailsPage } from "../components/pages/ProductDetailsPage/ProductDetailsPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registeredPage" element={<RegisteredPage />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route
          path="/productDetailsPage/:productId"
          element={<ProductDetailsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
