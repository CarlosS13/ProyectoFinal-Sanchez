import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productosBarberia from "../data/productosBarberia";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productosBarberia);
      }, 1500);
    });

    getData.then((res) => {
      if (categoriaId) {
        setItems(res.filter(p => p.categoria === categoriaId));
      } else {
        setItems(res);
      }
    });
  }, [categoriaId]);

  return <ItemList productos={items} />;
};

export default ItemListContainer;
