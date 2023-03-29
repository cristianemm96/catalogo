import React,{useCallback} from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import './style.css'

const Buscador = () => {
  const navigate = useNavigate()
  const realizarBusqueda = useCallback((e)=>{
    e.preventDefault()
    const palabraBuscada = e.currentTarget.keyword.value.trim()
    if(palabraBuscada.length === 0){
      swal("Debe ingresar una palabra")
    }else{
      navigate(`/resultado?palabra-buscada=${palabraBuscada}`)
      window.location.reload()
    }
  },[])
  return (
    <>
      <form className="d-flex align-items-center ml-auto busqueda" onSubmit={realizarBusqueda}>
        <label className="form-label mx-2 mb-0">
          <input
            type="text"
            placeholder="Buscar..."
            name="keyword"
            aria-label="search"
            className="form-control"
          />
        </label>
        <button className="btn btn-secondary" type="submit">
          Buscar
        </button>
      </form>
    </>
  );
};

export default Buscador;
