import { useState } from "react";

const ItemCount = ({ stock, inicial, onAdd }) => {
  const [contador, setContador] = useState(inicial);

  const sumar = () => contador < stock && setContador(contador + 1);
  const restar = () => contador > 1 && setContador(contador - 1);

  return (
    <div>
      <button onClick={restar}>-</button>
      <span>{contador}</span>
      <button onClick={sumar}>+</button>
      <button onClick={() => onAdd(contador)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
