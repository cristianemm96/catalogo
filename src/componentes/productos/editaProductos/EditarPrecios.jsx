import React, { useState } from "react";
import { useContextoApp } from "../../../contexto/ContextoProductos";

const EditarPrecios = () => {
  const categorias = ['Todas', 'Fiambres', 'Quesos']
  const {actualizarPrecios, deshacerCambioPrecios} = useContextoApp()
  const [dataAumento, setDataAumento] = useState({
    porcentaje: '',
    categoria: "todas",
  });

  const realizarAumento = (e)=>{
    e.preventDefault()
    console.log(dataAumento)
    actualizarPrecios(dataAumento)
  }

  return (
    <div style={{display:"flex", alignItems:"center"}} className="edicion_precios">
      <form
        onSubmit={realizarAumento}
      >
        <input
          type="number"
          name="porcentaje"
          placeholder="Porcentaje"
          value={dataAumento.porcentaje}
          onChange={e=>setDataAumento({...dataAumento, porcentaje: e.target.value})}
          required
        />
        <select
          name="categorias"
          id="categorias"
          style={{ marginLeft: "5px" }}
          defaultValue={dataAumento.categoria}
          onChange={e=>setDataAumento({...dataAumento, categoria: e.target.value})}
        >
          {categorias.map((c,i)=>{
            return <option value={c} key={i}>{c}</option>
          })}
        </select>
        <button
          type="submit"
          className="btn btn-primary btn_actualizar"
          style={{ marginLeft: "5px" }}
        >
          Actualizar Precios
        </button>
      </form>
      <button
          type="button"
          className="btn btn-danger btns_edicion"
          style={{ marginLeft: "5px" }}
          onClick={()=>{deshacerCambioPrecios(dataAumento.categoria)}}
        >Deshacer cambios</button>
    </div>
  );
};

export default EditarPrecios;
