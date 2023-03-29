import React, { useCallback, useRef } from "react";
import { useContextoApp } from "../../contexto/ContextoProductos";
import { Navigate} from 'react-router-dom'
import swal from "sweetalert";

const InicioSesion = () => {
  const email = useRef('')
  const contraseña = useRef('')
  const { iniciarSesion, usuario } = useContextoApp();
  const submitHandler = useCallback(async(e) => {
    e.preventDefault();
    try{
        await iniciarSesion(email.current.value, contraseña.current.value);
    }
    catch{
      swal({title:"Error", text:"Ha ocurrido un error al iniciar sesion", icon:"error"})
    }
  });
  return (
    <div>
      <main className="form-signin w-30 m-auto mt-100" style={{ width: "30%" }}>
        <form style={{ marginTop: "140px" }} onSubmit={submitHandler}>
          <div className="form-floating">
            <input
              type="email"
              name="email"
              className="form-control"
              id="floatingInput"
              ref={email}
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating mt-1">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              ref={contraseña}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary mt-1" type="submit">
            Ingresar
          </button>
        </form>
      </main>
      {usuario&&<Navigate to={'/'}/>}
    </div>
  );
};

export default InicioSesion;
