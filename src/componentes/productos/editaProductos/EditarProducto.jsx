import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useContextoApp } from "../../../contexto/ContextoProductos";
import swal from 'sweetalert'

const EditarProducto = ({ idProducto }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const { editarProductoConID, obtenerDatosProducto } = useContextoApp();
  const [productoDatos, setProductoDatos] = useState({
    nombre: "",
    precio: null,
    articulo: "",
    urlIMG: "",
  });
  const guardarCambios = () => {
    editarProductoConID(productoDatos, idProducto);
    swal({
    text: "Producto editado correctamente",
    icon: "success"})
    setShow(false);
  };

  const obtenerDatos = async () => {
    const datos = await obtenerDatosProducto(idProducto);
    setProductoDatos({
      nombre: datos.nombre,
      precio: datos.precio,
      ultimoPrecio: datos.ultimoPrecio,
      numProducto: datos.numProducto,
      categoria:datos.categoria,
      descripcion: datos.descripcion,
      urlIMG: datos.urlIMG,
    });
    handleShow();
  };
  //refactorizar render
  return (
    <>
      <Button
        variant="primary"
        onClick={obtenerDatos}
        style={{ marginRight: "3px" }}
      >
        Editar
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
                value={productoDatos.nombre}
                onChange={(e) =>
                  setProductoDatos({ ...productoDatos, nombre: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                autoFocus
                value={productoDatos.precio}
                onChange={(e) =>
                  setProductoDatos({ ...productoDatos, precio: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={productoDatos.categoria}
                onChange={(e) =>
                  setProductoDatos({
                    ...productoDatos,
                    categoria: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>URL de la imagen</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={productoDatos.urlIMG}
                onChange={(e) =>
                  setProductoDatos({ ...productoDatos, urlIMG: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripcion</Form.Label>
              <Form.Control as="textarea" rows={2} value={productoDatos.descripcion}
                onChange={(e) =>
                  setProductoDatos({ ...productoDatos, descripcion: e.target.value })
                }/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={guardarCambios}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditarProducto;
