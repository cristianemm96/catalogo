import React, { useEffect, useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import { useProductos } from "../../contexto/ContextoProductos";
import swal from "sweetalert";
import EditarProducto from "./EditarProducto";

const TablaProductos = () => {
  const [data, setData] = useState([]);
  const { obtenerTodosLosProductos, productos, eliminarProductoConID } = useProductos();
  const [pending, setPending] = useState(true);
  const eliminarProducto = (id)=>{
    eliminarProductoConID(id)
    swal({text:"Producto eliminado correctamente", icon:"success"})
  }
  useEffect(() => {
    (async () => {
      obtenerTodosLosProductos();
    })();
  }, []);
  useEffect(() => {
    const actualData = [];
    console.log(productos);
    productos.forEach((p) =>
      actualData.push({
        id: p.id,
        nombre: p.data.nombre,
        precio: p.data.precio,
        articulo:p.data.articulo,
        acciones: (
          <div key={p.id} data-product-id={p.id}>
            <EditarProducto idProducto={p.id} />
            <button className="btn btn-danger" onClick={()=>eliminarProducto(p.id)}>Eliminar</button>
          </div>
        ),
      })
    );
    setData(actualData);
    setTimeout(() => {
      setPending(false);
    }, 1500);
  }, [productos]);

  const columns = useMemo(()=>[
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Precio",
      selector: (row) => row.precio,
      sortable: true,
    },
    {
      name: "Articulo",
      selector: (row) => row.articulo,
      sortable: true,
    },
    {
      name: "Acciones",
      selector: (row) => row.acciones,
    },
  ],[]);

  return (
    <div>
      <DataTable
        title={"Productos"}
        columns={columns}
        data={data}
        pagination
        progressPending={pending}
      />
    </div>
  );
};

export default TablaProductos;
