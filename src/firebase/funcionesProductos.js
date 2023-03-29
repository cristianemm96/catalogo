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
  //Obtiene todos los productos de la collecion
  return await getDocs(collection(db, "productos"));
};

export const guardarProducto = async (producto) => {
  //Guarda un nuevo producto en la colección
  const docRef = doc(db, "cantidadProductos", "r18ltw7YcVBTW2xuaLLm");
  const docSnap = await getDoc(docRef);
  let cant = docSnap.data()
  await addDoc(collection(db, "productos"), {
    nombre: producto.nombre,
    precio: parseInt(producto.precio),
    ultimoPrecio: parseInt(producto.precio),
    descripcion: producto.descripcion,
    categoria: producto.categoria,
    urlIMG: producto.urlIMG,
    numProducto: cant.cantidadActual + 1
  });
  await setDoc(doc(db, "cantidadProductos", "r18ltw7YcVBTW2xuaLLm"), {
    cantidadActual: cant.cantidadActual + 1 
  })
};


export const obtenerDatosPorID = async (id) => {
  const docRef = doc(db, "productos", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};


export const editarProductoID = async (producto, id) => {
  await setDoc(doc(db, "productos", id), {
    nombre: producto.nombre,
    precio: parseInt(producto.precio),
    ultimoPrecio: parseInt(producto.ultimoPrecio),
    numProducto: parseInt(producto.numProducto),
    categoria: producto.categoria,
    descripcion: producto.descripcion,
    urlIMG: producto.urlIMG,
  });
};

export const eliminarProductoID = async (id) => {
  await deleteDoc(doc(db, "productos", id));
  const docRef = doc(db, "cantidadProductos", "r18ltw7YcVBTW2xuaLLm");
  const docSnap = await getDoc(docRef);
  let cant = docSnap.data()
  await setDoc(doc(db, "cantidadProductos", "r18ltw7YcVBTW2xuaLLm"), {
    cantidadActual: cant.cantidadActual - 1 
  })
};
