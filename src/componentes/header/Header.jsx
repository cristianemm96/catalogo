import React, { useState, useEffect } from "react";
import Buscador from "./buscador/Buscador";
import { Link } from "react-router-dom";
import { obtenerRolUsuario } from "../../firebase/funcionesUsuarios";
import { useProductos } from "../../contexto/ContextoProductos";

const Header = () => {
  const [rol, setRol] = useState(null);
  const {usuario, eliminarSesionUsuario} = useProductos()
  const token = JSON.parse(sessionStorage.getItem("token"));
  useEffect(() => {
    if (token) {
      (async () => {
        const rolF = await obtenerRolUsuario();
        if(!rolF){
        }else{
          setRol(rolF.rol)
        }
      })();
    }
  }, [usuario]);
  return (
    <>
      <header className="fixed-top">
        <nav
          className="navbar navbar-dark bg-dark navbar-expand-md"
          id="collapse"
        >
          <Link to="/" className="nav-link px-2 text-primary">
            Fiambres
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                {rol == "admin" && (
                  <Link
                    to="/productos/configuracion"
                    className="nav-link px-2 text-primary"
                  >
                    Productos
                  </Link>
                )}
              </li>
              <li className="nav-item"></li>
              <li className="nav-item ml-auto"></li>
            </ul>
            <Buscador />
            {token != null && <button onClick={()=>eliminarSesionUsuario()} className="btn btn-danger" style={{marginLeft:"8px"}}>Cerrar sesion</button>}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
