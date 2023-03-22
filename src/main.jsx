import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProveedorContexto } from "./contexto/ContextoProductos";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ProveedorContexto>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProveedorContexto>
  </>
);
