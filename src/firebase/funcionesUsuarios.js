import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app, db } from "./firebase";
import {
    doc,
    getDoc,
  } from "firebase/firestore";

const auth = getAuth(app);

export const authInicioSesion = async (email, password) => {
  const sesion = await signInWithEmailAndPassword(auth, email, password);
  const sesionToken = await sesion.user.getIdToken();
  const id = sesion.user.uid
  sessionStorage.setItem("token", JSON.stringify(sesionToken));
  sessionStorage.setItem("id", JSON.stringify(id));
  return sesion;
};

export const obtenerRolUsuario = async () => {
  const id = JSON.parse(sessionStorage.getItem('id'))
  const docRef = doc(db, "usuarios", id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data()
  return data
};
