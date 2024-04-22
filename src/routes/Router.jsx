import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "../components/pages/HomePage/HomePage";
import { RegisteredPage } from "../components/pages/RegisteredPage/RegisteredPage";
import { CategoryPage } from "../components/pages/CategoryPage/CategoryPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registeredPage" element={<RegisteredPage />} />
        <Route path="/categoryPage" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};
