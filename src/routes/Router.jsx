import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "../components/pages/HomePage/HomePage";
import { RegisteredPage } from "../components/pages/RegisteredPage/RegisteredPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registeredPage" element={<RegisteredPage />} />
      </Routes>
    </BrowserRouter>
  );
};
