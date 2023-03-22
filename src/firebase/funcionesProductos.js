import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

export const obtenerProductos = async () => {
  return await getDocs(collection(db, "productos"));
};

export const guardarProducto = async (producto) => {
  await addDoc(collection(db, "productos"), {
    nombre: producto.nombre,
    precio: parseInt(producto.precio),
    ultimoPrecio: parseInt(producto.precio),
    articulo: producto.articulo,
    descripcion: producto.descripcion,
    categoria: producto.categoria,
    urlIMG: producto.urlIMG,
  });
};

export const obtenerDatosPorID = async (id) => {
  const docRef = doc(db, "productos", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const editarProductoID = async (producto, id) => {
  await setDoc(doc(db, "productos", id), {
    nombre: producto.nombre,
    precio: producto.precio,
    ultimoPrecio: producto.ultimoPrecio,
    articulo: producto.articulo,
    categoria: producto.categoria,
    descripcion: producto.descripcion,
    urlIMG: producto.urlIMG,
  });
};

export const eliminarProductoID = async (id) => {
  await deleteDoc(doc(db, "productos", id));
};
