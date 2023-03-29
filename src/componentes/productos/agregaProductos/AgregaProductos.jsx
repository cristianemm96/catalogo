import React, { useState } from "react";
import { AgregaProductosForm } from "./AgregaProductosForm";
import { useContextoApp } from "../../../contexto/ContextoProductos";
import "../style.css";

const AgregaProductos = () => {
  const { agregarProducto } = useContextoApp();
  const [show, setShow] = useState(false);
  const [producto, setProducto] = useState({
    nombre: "",
    precio: null,
    categoria: "",
    descripcion: "",
    urlIMG: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const agregarProductoNuevo = () => {
    setShow(false);
    agregarProducto(producto);
    swal({
      text: "Producto guardado correctamente",
      icon: "success",
    });
  };
  return (
    <>
      <AgregaProductosForm
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        setProducto={setProducto}
        producto={producto}
        agregarProductoNuevo={agregarProductoNuevo}
      />
    </>
  );
};

export default AgregaProductos;

