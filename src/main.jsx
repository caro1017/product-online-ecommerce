import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { EcommerceProvider } from "./service/EcommerceContext.jsx";
// Permitir modificar los estilos propios y dejar los de material en segundo plano
import { StyledEngineProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EcommerceProvider>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </EcommerceProvider>
  </React.StrictMode>
);
