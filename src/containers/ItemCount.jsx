import { useState } from "react";
import { useCart } from "../components/CartContext";

const ItemCount = ({ stock = 5, inicial = 1, onAdd, item }) => {
  const [contador, setContador] = useState(inicial);
  const { addToCart } = useCart();

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("No puedes agregar más unidades, stock máximo alcanzado");
    }
  };
  const restar = () => contador > 1 && setContador(contador - 1);

  const handleAdd = () => {
    addToCart(item, contador, stock);
    if (onAdd) onAdd(contador);
  };

  return (
    <div>
      <button onClick={restar}>-</button>
      <span>{contador}</span>
      <button onClick={sumar}>+</button>
      <button onClick={handleAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
