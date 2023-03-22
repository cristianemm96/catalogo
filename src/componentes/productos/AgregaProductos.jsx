import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useProductos } from "../../contexto/ContextoProductos";
import './style.css'

const AgregaProductos = () => {
  const {agregarProducto} = useProductos()
  const [show, setShow] = useState(false);
  const [producto, setProducto] = useState({
    nombre: "",
    precio: null,
    articulo: "",
    categoria:"",
    descripcion:"",
    urlIMG: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const agregarProductoNuevo = () => {
    setShow(false);
    agregarProducto(producto)
    swal({
    text: "Producto guardado correctamente",
    icon: "success"})
  };
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="float-right btn_agregaProducto"
        style={{ marginBottom: "10px" }}
      >
        Agregar producto
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                name="nombre"
                onChange={(e) =>
                  setProducto({...producto, nombre: e.target.value})
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="number" autoFocus name="precio" onChange={e=>setProducto({...producto, precio:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Articulo</Form.Label>
              <Form.Control type="text" autoFocus name="articulo" onChange={e=>setProducto({...producto, articulo:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Categoria</Form.Label>
              <Form.Control type="text" autoFocus name="img" onChange={e=>setProducto({...producto, categoria:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>URL de la imagen</Form.Label>
              <Form.Control type="text" autoFocus name="img" onChange={e=>setProducto({...producto, urlIMG:e.target.value})}/>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripcion</Form.Label>
              <Form.Control as="textarea" rows={2} name="descripcion" onChange={e=>setProducto({...producto, descripcion:e.target.value})}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={agregarProductoNuevo}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AgregaProductos;
