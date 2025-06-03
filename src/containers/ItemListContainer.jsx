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
      setItems(res);
    });
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
