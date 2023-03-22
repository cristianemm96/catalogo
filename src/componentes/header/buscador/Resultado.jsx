import React, { useEffect, useState } from "react";
import {useSearchParams} from 'react-router-dom'
import { useProductos } from "../../../contexto/ContextoProductos";
import Spinner  from "./Spinner";
import ListaProductos from "../../main/ListaProductos";

const Resultado = () => {
  const [resultadoProductos, setResultado] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const queryPalabra = new URLSearchParams(window.location.search);
  const palabra = queryPalabra.get("palabra-buscada");
  const { productos, obtenerTodosLosProductos } = useProductos();
  useEffect(() => {
    obtenerTodosLosProductos();
    setTimeout(function () {
      setIsFetching(false);
    }, 50);
  }, []);
  useEffect(() => {
    const reg = RegExp(`${palabra}`, "g");
    const productosFiltrados = productos?.filter(
      (p) =>
        reg.test(p.data.nombre.toLowerCase()) ||
        reg.test(p.data.descripcion.toLowerCase())
    );
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
