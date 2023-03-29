import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export const AgregaProductosForm = ({handleShow, handleClose, show, setProducto, producto, agregarProductoNuevo}) => {
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
                  setProducto({ ...producto, nombre: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                autoFocus
                name="precio"
                onChange={(e) =>
                  setProducto({ ...producto, precio: e.target.value })
                }
                onWheel={(e) => e.target.blur()}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                name="categoria"
                onChange={(e) =>
                  setProducto({ ...producto, categoria: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>URL de la imagen</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                name="img"
                onChange={(e) =>
                  setProducto({ ...producto, urlIMG: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="descripcion"
                onChange={(e) =>
                  setProducto({ ...producto, descripcion: e.target.value })
                }
              />
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
