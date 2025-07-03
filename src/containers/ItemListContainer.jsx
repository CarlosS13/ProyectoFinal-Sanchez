import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const fetchProductos = async () => {
      const productosColl = collection(db, "productos");
      const productosSnapshot = await getDocs(productosColl);
      let productosList = productosSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }));

      if (categoriaId) {
        productosList = productosList.filter(
          (prod) => prod.categoria === categoriaId
        );
      }

      setItems(productosList);
    };

    fetchProductos();
  }, [categoriaId]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
