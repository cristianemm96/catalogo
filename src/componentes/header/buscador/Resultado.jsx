import React, { useEffect, useState } from "react";
import { useContextoApp } from "../../../contexto/ContextoProductos";
import Spinner  from "./Spinner";
import ListaProductos from "../../main/ListaProductos";

const Resultado = () => {
  const [resultadoProductos, setResultado] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const queryPalabra = new URLSearchParams(window.location.search);
  const palabra = queryPalabra.get("palabra-buscada").toLowerCase();
  const { productos, obtenerTodosLosProductos } = useContextoApp();
  useEffect(() => {
    obtenerTodosLosProductos();
    setTimeout(function () {
      setIsFetching(false);
    }, 50);
  }, []);
  useEffect(() => {
    const productosFiltrados = productos?.filter(
      (p) =>
        p.data.nombre.toLowerCase().includes(palabra) 
        || p.data.descripcion.toLowerCase().includes(palabra)
    )
    setResultado(productosFiltrados);
  }, [productos]);
  return (
    <div
      style={{ display: "flex", marginTop: "55px", justifyContent: "center" }}
    >
      {isFetching?<Spinner/>:<ListaProductos prods={resultadoProductos} />}
    </div>
  );
};

export default Resultado;
