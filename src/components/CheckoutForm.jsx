import { useLocation, Link } from "react-router-dom";

function CheckoutForm() {
  const location = useLocation();
  const { orderId, orderData } = location.state || {};

  if (!orderId || !orderData) {
    return (
      <div>
        <h2>No hay información de compra.</h2>
        <Link to="/tienda">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>¡Compra realizada con éxito!</h2>
      <h3>ID de la orden: {orderId}</h3>
      <h4>Resumen de tu compra:</h4>
      <ul>
        {orderData.items.map(item => (
          <li key={item.id}>
            {item.nombre} - Cantidad: {item.cantidad} - Precio unitario: ${item.valor} - Subtotal: ${item.valor * item.cantidad}
          </li>
        ))}
      </ul>
      <h4>Total pagado: ${orderData.total}</h4>
      <Link to="/tienda">Volver a la tienda</Link>
    </div>
  );
}

export default CheckoutForm;