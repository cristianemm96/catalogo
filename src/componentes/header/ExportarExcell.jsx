import React from "react";
import { useContextoApp } from "../../contexto/ContextoProductos";
import {ExportarCSV} from '../../utils/ExportarCsv';


export const ExportarExcell = () => {
  const { productos } = useContextoApp();
  const actData = productos.map((p) => {
    return {
      Nombre: p.data.nombre,
      Categoria: p.data.categoria,
      Descripcion: p.data.descripcion,
      Precio: p.data.precio,
    };
  });
  const fileName = 'Productos'
  return (
    <>
        <ExportarCSV csvData={actData} fileName={fileName} />
    </>
  );
};
