import React, { useEffect } from "react";
import { useProductos } from "../../contexto/ContextoProductos";
import ListaProductos from "./ListaProductos";

const Main = () => {
  const { productos, obtenerTodosLosProductos } = useProductos();
  useEffect(() => {
    obtenerTodosLosProductos();
  }, []);
  return (
    <div
      className="d-flex flex-wrap"
      style={{ marginTop: "55px", justifyContent: "center" }}
    >
      <ListaProductos prods={productos} />
    </div>
  );
};

export default Main;
