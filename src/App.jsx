import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Error from "./components/Error";
import "./components/Styles.css"
import { CartProvider } from "./components/CartContext";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";

function App() {
  return (
    <CartProvider>
     <BrowserRouter>
      <NavBar />
       <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tienda" element={<ItemListContainer />} />
        <Route path="/tienda/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/tienda/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="*" element={<Error />} />
      </Routes>
     </BrowserRouter>
    </CartProvider>
  );
}

// En el primer push de este proyecto me enfoque en la funcionalidad y requisitos de la engrega, ya que tuve poco tiempo por el trabajo. Pero poco a poco voy a ir implementando mejoras en el diseño y efectos visuales para una mejor interaccion del UNSAFE_useScrollRestoration.

export default App;