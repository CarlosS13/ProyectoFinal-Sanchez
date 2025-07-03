import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore();

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const docRef = doc(db, "productos", itemId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setItem({ id: docSnap.id, ...docSnap.data() });
      } else {
        setItem(null);
      }
    };

    fetchItem();
  }, [itemId]);

  return item ? <ItemDetail {...item} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;