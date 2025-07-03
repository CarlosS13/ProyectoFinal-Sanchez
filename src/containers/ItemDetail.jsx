import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";

const ItemDetail = (props) => {
const navigate = useNavigate();

  return (
    <div>
      <h2>{props.nombre}</h2>
      <p>{props.descripcion}</p>
      <p>Precio: ${props.valor}</p>
      <ItemCount inicial={1} item={props} />
      <button onClick={() => navigate(-1)}>Atrás</button>
    </div>
  );
};

export default ItemDetail;