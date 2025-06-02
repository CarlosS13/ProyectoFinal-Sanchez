import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productosBarberia from "../data/productosBarberia";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const getItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productosBarberia.find(p => p.id === parseInt(itemId)));
      }, 1500);
    });

    getItem.then(res => setItem(res));
  }, [itemId]);

  return item ? <ItemDetail {...item} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;