import React,{useState, useEffect} from 'react'
import Spinner from '../header/buscador/Spinner';

const ListaProductos = ({prods}) => {
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setIsFetching(false);
    }, 1450);
  }, []);
  if(isFetching){
    return (
      <Spinner/>
    )
  }
  return (
    <>
      {prods.length > 0 ? prods?.map((p) => {
        return (
          <div
            className="card"
            style={{ width: "19rem", margin: "10px" }}
            data-id = {p.id}
            key={Math.random()}
          >
            <img
              className="card-img-top"
              src={p.data.urlIMG}
              alt="Card image cap"
              style={{ maxHeight: "250px", minHeight: "250px" }}
            />
            <div className="card-body">
              <h5 className="card-title">{p.data.nombre}</h5>
              <p className="card-text">{p.data.descripcion}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h4>$ {p.data.precio}</h4>
              </li>
            </ul>
          </div>
        );
      }): <h3 style={{marginTop:"80px"}}>No hubo resultados</h3>}
    </>
  )
}

export default ListaProductos
