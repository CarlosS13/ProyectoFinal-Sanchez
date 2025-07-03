import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, cantidad, stock = 5) => {
  setCart(prevCart => {
    const existing = prevCart.find(prod => prod.id === item.id);
    const cantidadActual = existing ? existing.cantidad : 0;
    const nuevaCantidad = cantidadActual + cantidad;

     if (nuevaCantidad > stock) {
     alert("No puedes agregar más unidades, stock máximo alcanzado");
     return prevCart;
     }

     if (existing) {
       return prevCart.map(prod =>
         prod.id === item.id
           ? { ...prod, cantidad: nuevaCantidad }
           : prod
        );
        } else {
        return [...prevCart, { ...item, cantidad }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(prod => prod.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalUnidades = cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  const totalPrecio = cart.reduce((acc, prod) => acc + prod.cantidad * prod.valor, 0);

  const updateQuantity = (id, cantidad) => {
    setCart(prevCart =>
      prevCart.map(prod =>
        prod.id === id ? { ...prod, cantidad: Math.max(1, cantidad) } : prod
      )
    );
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      totalUnidades,
      totalPrecio,
      updateQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
}