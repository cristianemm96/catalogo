import React, { useEffect } from "react";
import { useContextoApp } from "../../contexto/ContextoProductos";
import ListaProductos from "./ListaProductos";

const Main = () => {
  const { productos, obtenerTodosLosProductos } = useContextoApp();
  useEffect(() => {
    obtenerTodosLosProductos();
  }, []);
  const productosOrdenados = productos.sort(((a, b) => a.data.numProducto - b.data.numProducto))
  return (
    <div
      className="d-flex flex-wrap"
      style={{marginTop: "55px", justifyContent: "center" }}
    >
      <ListaProductos prods={ productosOrdenados} />
    </div>
  );
};

export default Main;
