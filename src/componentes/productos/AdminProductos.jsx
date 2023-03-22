import React,{useState, useEffect} from "react";
import AgregaProductos from "./AgregaProductos";
import EditarPrecios from "./EditarPrecios";
import TablaProductos from "./TablaProductos";
import { useNavigate } from "react-router-dom";
import { useProductos } from "../../contexto/ContextoProductos";
import './style.css'

const AdminProductos = () => {
  const navigate = useNavigate()
  const {obtenerRol}=useProductos()
  const [rol, setRol] = useState({});
  useEffect(() => {
    const token = JSON.parse(sessionStorage.getItem("token"));
    console.log(token)
    if (token != null) {
      (async () => {
        const rolF = await obtenerRol();
        if(!rolF){
          navigate('/')
        }else{
          setRol(rolF.rol)
        }
        
      })();
    }else{
      navigate('/')
    }
  }, []);
  return (
    <>
    {rol == "admin" &&  <div
    style={{
      width: "75%",
      margin: "auto",
      marginTop: "120px",
      minHeight: "100vh",
    }}
  >
    <div style={{display:"flex", justifyContent:"space-between"}} className="estilo_admin_productos">
      <EditarPrecios />
      <AgregaProductos />
    </div>
    <TablaProductos />
  </div>}
  </>
    
  );
};

export default AdminProductos;
