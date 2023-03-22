import React, { createContext, useContext, useState } from "react";
import {
  guardarProducto,
  obtenerDatosPorID,
  obtenerProductos,
  editarProductoID,
  eliminarProductoID,
} from "../firebase/funcionesProductos";
import { authInicioSesion, obtenerRolUsuario } from "../firebase/funcionesUsuarios";

export const ContextoProductos = createContext();
export const useProductos = () => {
  const contexto = useContext(ContextoProductos);
  if (!contexto) {
    throw new Error(
      "El hook useProductos debe utilizarse dentro de un Proveedor."
    );
  }
  return contexto;
};

export const ProveedorContexto = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [usuario, setUsuario] = useState(null)

  const obtenerTodosLosProductos = async () => {
    const prodsFirestore = await obtenerProductos();
    const todosProductos = [];
    prodsFirestore.forEach((p) => {
      todosProductos.push({ id: p.id, data: p.data() });
    });
    setProductos(todosProductos);
  };

  const agregarProducto = async (producto) => {
    try {
      await guardarProducto(producto);
      obtenerTodosLosProductos();
    } catch {}
  };

  const editarProductoConID = async (producto, id) => {
    await editarProductoID(producto, id);
    obtenerTodosLosProductos();
  };

  const obtenerDatosProducto = async (id)=>{
    const datos = await obtenerDatosPorID(id)
    return datos
  }

  const eliminarProductoConID = async(id)=>{
    await eliminarProductoID(id)
    obtenerTodosLosProductos()
  }

  const iniciarSesion = async(email, password)=>{
    console.log(email, password)
    const firebaseUser = await authInicioSesion(email, password)
    console.log(firebaseUser)
    if(firebaseUser.user.getIdToken){
      setUsuario({firebaseUser})
    }
  }

  const obtenerRol = async()=>{
    const rol = await obtenerRolUsuario()
    return rol
  }

  const eliminarSesionUsuario = ()=>{
    setUsuario(null)
    sessionStorage.clear()
    window.location.reload()
  }

  const actualizarPrecios = async({porcentaje, categoria})=>{
    try{
      productos.forEach(p=>{
        const nuevoPrecio = Math.round(p.data.precio + ((p.data.precio * porcentaje) / 100))
        console.log(categoria)
        if(categoria.toLowerCase() === "todas" || p.data.categoria.toLowerCase() === categoria.toLowerCase()){
          editarProductoConID({
            nombre: p.data.nombre,
            precio: nuevoPrecio,
            ultimoPrecio: p.data.precio,
            categoria: p.data.categoria,
            descripcion: p.data.descripcion,
            articulo: p.data.articulo,
            urlIMG: p.data.urlIMG
          }, p.id)
        }
      })
      swal({text:"Precios actualizados", icon:"success"})
    }catch{
      swal({text:"Ha ocurrido un error", icon:"error"})
    }
    
  }
  const deshacerCambioPrecios = (categoria)=>{
    try{
      productos.forEach(p=>{
        if(categoria.toLowerCase() === "todas" || p.data.categoria.toLowerCase() === categoria.toLowerCase()){
          editarProductoConID({
            nombre: p.data.nombre,
            precio: p.data.ultimoPrecio,
            ultimoPrecio: p.data.precio,
            categoria: p.data.categoria,
            descripcion: p.data.descripcion,
            articulo: p.data.articulo,
            urlIMG: p.data.urlIMG
          }, p.id)
        }
      }
      )
      swal({text:"Precios actualizados", icon:"success"})
    }catch{
      swal({text:"Ha ocurrido un error", icon:"error"})
    }
  }

  return (
    <ContextoProductos.Provider
      value={{
        productos,
        obtenerTodosLosProductos,
        agregarProducto,
        editarProductoConID,
        obtenerDatosProducto,
        eliminarProductoConID,
        actualizarPrecios,
        deshacerCambioPrecios,
        obtenerRol,
        iniciarSesion,
        usuario,
        eliminarSesionUsuario
      }}
    >
      {children}
    </ContextoProductos.Provider>
  );
};
