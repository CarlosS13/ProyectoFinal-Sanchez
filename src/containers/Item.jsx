import { Link } from "react-router-dom";

const Item = ({ id, nombre, descripcion, valor }) => {
  return (
    <div className="card">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>${valor}</p>
      <Link to={`/tienda/item/${id}`}>Ver más</Link>
    </div>
  );
};

export default Item;