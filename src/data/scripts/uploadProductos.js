import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import productosBarberia from "../productosBarberia.js";

// Archivo que utlice para subir los productos a Firebase Firestore

const firebaseConfig = {
  apiKey: "AIzaSyC3E7y_m-z8DxBZdqSiSQXTAGbReDs3RX4",
  authDomain: "reactcoderhouse-66981.firebaseapp.com",
  projectId: "reactcoderhouse-66981",
  storageBucket: "reactcoderhouse-66981.firebasestorage.app",
  messagingSenderId: "702315896292",
  appId: "1:702315896292:web:12f16ed6543e7052e43bf1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function uploadProductos() {
  for (const producto of productosBarberia) {
    try {
      await addDoc(collection(db, "productos"), producto);
      console.log(`Producto subido: ${producto.nombre}`);
    } catch (error) {
      console.error("Error subiendo producto:", producto.nombre, error);
    }
  }
  console.log("Todos los productos han sido subidos.");
}

uploadProductos();