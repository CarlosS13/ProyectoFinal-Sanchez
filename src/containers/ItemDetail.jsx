import ItemCount from "./ItemCount";

const ItemDetail = ({ nombre, descripcion, valor }) => {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p>Precio: ${valor}</p>
      <ItemCount stock={10} inicial={1}  />
    </div>
  );
};

export default ItemDetail;