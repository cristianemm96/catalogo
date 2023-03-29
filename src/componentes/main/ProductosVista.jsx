import React from 'react'
import Spinner from '../header/buscador/Spinner'
import { ImprimirProductos } from './ImprimirProductos'

export const ProductosVista = ({prods, isFetching}) => {
    if(isFetching){
        return(
            <Spinner/>
        )
    }
    return (
    <div style={{display:"flex", flexWrap:"wrap", margin:"auto", justifyContent:"center"}}>
      {prods.length > 0 ? <ImprimirProductos productos={prods}/>
      : <h3 style={{marginTop:"80px"}}>No hubo resultados</h3>}
    </div>
  )
}
