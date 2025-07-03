import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";

function CartWidget(){
    const { totalUnidades } = useCart();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/cart");
    };

    return (
        <div className="carrito" onClick={handleClick} style={{ cursor: "pointer" }}>
            <FaShoppingCart size="25px"/>
            <span className="badge">{totalUnidades}</span>
        </div>
    )
}

export default CartWidget;