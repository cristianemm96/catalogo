import React,{useState, useEffect} from 'react'
import { ProductosVista } from './ProductosVista';

const ListaProductos = ({prods}) => {
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setIsFetching(false);
    }, 1450);
  }, []);
  return (
    <div style={{marginBottom:"80px"}}>
      <ProductosVista prods={prods} isFetching={isFetching}/>
    </div>
  )
}
export default ListaProductos
