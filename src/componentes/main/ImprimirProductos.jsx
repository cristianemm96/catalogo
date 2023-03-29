import React from "react";

export const ImprimirProductos = ({ productos }) => {
  return (
    productos?.map((p) => {
    return (
      <div
        className="card"
        style={{ width: "19.1rem", margin: "10px" }}
        data-id={p.id}
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
  }));
  
};
