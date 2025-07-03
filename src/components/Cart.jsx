import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";

function Cart() {
  const { cart, clearCart, totalUnidades, totalPrecio, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (cart.length === 0) {
      return;
    }

    const order = {
      items: cart,
      total: totalPrecio,
      date: Timestamp.fromDate(new Date()),
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    const docRef = await addDoc(ordersCollection, order);

    clearCart();
    navigate("/checkout", { state: { orderId: docRef.id, orderData: order } });
  };

  if (cart.length === 0) {
    return <div>El carrito está vacío.</div>;
  }

  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {cart.map(producto => (
          <li key={producto.id}>
            {producto.nombre} - Cantidad: {producto.cantidad} - Precio unitario: ${producto.valor} - Subtotal: ${producto.valor * producto.cantidad}
            <button onClick={() => removeFromCart(producto.id)}>Eliminar</button>
            <button
              onClick={() => updateQuantity(producto.id, producto.cantidad - 1)}
              disabled={producto.cantidad <= 1}
            >-</button>
            {producto.cantidad}
            <button
              onClick={() => {
                if (producto.cantidad < 5) {
                  updateQuantity(producto.id, producto.cantidad + 1);
                } else {
                  alert("No puedes agregar más unidades, stock máximo alcanzado");
                }
              }}
              disabled={producto.cantidad >= 5}
            >+</button>
          </li>
        ))}
      </ul>
      <h3>Total de unidades: {totalUnidades}</h3>
      <h3>Total a pagar: ${totalPrecio}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
      <button onClick={handleCheckout} style={{ marginLeft: "10px" }}>Finalizar compra</button>
    </div>
  );
}

export default Cart;